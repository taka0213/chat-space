json.(@message, :content, :image)
json.created_at @message.created_at.to_s
json.user_name @message.user.name
json.id @message.id
json.group_id @message.group.id