# README



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index:true, null: false|
|email|string|null: false|
- add_index :users,[:name, :mail], unique: true


### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true, index:true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|index: true, null: false|

### Association
- has_many :members, through: :members
- has_many :messages
- has_many :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

