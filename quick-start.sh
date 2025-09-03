#!/bin/bash
# Quick start script for setting up the Docker Home Media environment

echo "Setting up environment files..."

# First, copy all .env-example files to .env files
echo "Copying environment example files..."
./scripts/copyenv.sh

echo "Environment files copied successfully!"

# Function to prompt user for input with default value
prompt_with_default() {
    local var_name="$1"
    local prompt_text="$2"
    local default_value="$3"
    local current_value="$4"
    
    echo ""
    echo "$current_value"
    if [ -n "$default_value" ]; then
        read -p "$prompt_text [$default_value]: " user_input
        # Return only the user input or default, without any extra text
        if [ -n "$user_input" ]; then
            echo "$user_input"
        else
            echo "$default_value"
        fi
    else
        read -p "$prompt_text: " user_input
        echo "$user_input"
    fi
}

# Function to update .env file
update_env_var() {
    local var_name="$1"
    local new_value="$2"
    local file_path="$3"
    
    # Remove any newlines from the value and escape special characters for sed
    cleaned_value=$(echo "$new_value" | tr -d '\n\r')
    
    # Use | as delimiter instead of / to avoid conflicts with file paths
    # Escape any | characters in the value
    escaped_value=$(echo "$cleaned_value" | sed 's/|/\\|/g')
    
    # Update the variable in the file using | as delimiter
    sed -i.bak "s|^${var_name}=.*|${var_name}=\"${escaped_value}\"|" "$file_path"
}

echo ""
echo "=== Configuring main .env file ==="
echo "Please provide values for the required configuration items."
echo "Press Enter to keep the current/default value."

# Check if .env exists, if not copy from example
if [ ! -f .env ]; then
    echo "Creating .env file from .env-example..."
    cp .env-example .env
fi

# Get current values from .env file
current_data_location=$(grep "^DEFAULT_CONTAINER_DATA_LOCATION=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_hostname=$(grep "^PROJECT_HOSTNAME=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_uid=$(grep "^UID=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_gid=$(grep "^GID=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_timezone=$(grep "^TIMEZONE=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_movies_path=$(grep "^LOCAL_MOVIES_PATH=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_tv_path=$(grep "^LOCAL_TV_PATH=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_books_path=$(grep "^LOCAL_BOOKS_PATH=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_downloads_path=$(grep "^LOCAL_DOWNLOADS_PATH=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')
current_backups_path=$(grep "^LOCAL_BACKUPS_PATH=" .env | cut -d'=' -f2 | sed 's/^"//;s/"$//')

# Prompt for basic configuration
data_location=$(prompt_with_default "DEFAULT_CONTAINER_DATA_LOCATION" "Container data location" "../../.containers" "$current_data_location")
hostname=$(prompt_with_default "PROJECT_HOSTNAME" "Project hostname" "localhost" "$current_hostname")
uid=$(prompt_with_default "UID" "User ID (run 'id -u' to find yours)" "1000" "$current_uid")
gid=$(prompt_with_default "GID" "Group ID (run 'id -g' to find yours)" "1000" "$current_gid")
timezone=$(prompt_with_default "TIMEZONE" "Timezone" "America/New_York" "$current_timezone")

# Prompt for media paths
echo ""
echo "=== Media Paths Configuration ==="
movies_path=$(prompt_with_default "LOCAL_MOVIES_PATH" "Local movies path" "/Volumes/Movies" "$current_movies_path")
tv_path=$(prompt_with_default "LOCAL_TV_PATH" "Local TV shows path" "/Volumes/Television" "$current_tv_path")
books_path=$(prompt_with_default "LOCAL_BOOKS_PATH" "Local books path" "/Volumes/Books" "$current_books_path")
downloads_path=$(prompt_with_default "LOCAL_DOWNLOADS_PATH" "Local downloads path" "/Volumes/Downloads" "$current_downloads_path")
backups_path=$(prompt_with_default "LOCAL_BACKUPS_PATH" "Local backups path" "/Volumes/Backups" "$current_backups_path")

# Optional: Traefik/Cloudflare configuration
echo ""
echo "=== Traefik/Cloudflare Configuration (Optional) ==="
echo "Leave blank to skip Traefik/Cloudflare setup"
cf_email=$(prompt_with_default "CF_API_EMAIL" "Cloudflare API Email" "" "")
if [ -n "$cf_email" ]; then
    echo "📖 Need help creating a token? Visit: https://dash.cloudflare.com/profile/api-tokens"
    cf_token=$(prompt_with_default "CF_DNS_API_TOKEN" "Cloudflare DNS API Token" "" "")
fi

# Update .env file with new values
echo ""
echo "Updating .env file with your configuration..."

update_env_var "DEFAULT_CONTAINER_DATA_LOCATION" "$data_location" ".env"
update_env_var "PROJECT_HOSTNAME" "$hostname" ".env"
update_env_var "UID" "$uid" ".env"
update_env_var "GID" "$gid" ".env"
update_env_var "TIMEZONE" "$timezone" ".env"
update_env_var "LOCAL_MOVIES_PATH" "$movies_path" ".env"
update_env_var "LOCAL_TV_PATH" "$tv_path" ".env"
update_env_var "LOCAL_BOOKS_PATH" "$books_path" ".env"
update_env_var "LOCAL_DOWNLOADS_PATH" "$downloads_path" ".env"
update_env_var "LOCAL_BACKUPS_PATH" "$backups_path" ".env"

if [ -n "$cf_email" ]; then
    update_env_var "CF_API_EMAIL" "$cf_email" ".env"
fi
if [ -n "$cf_token" ]; then
    update_env_var "CF_DNS_API_TOKEN" "$cf_token" ".env"
fi

echo "Configuration complete!"
echo ""
echo "Starting Docker Home Media environment..."
./scripts/startup.sh
echo "Docker Home Media environment started."