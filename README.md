# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: false|
|name|string|null: false, foreign_key: false|
|created_at|datetime|null: false, foreign_key: false|
|updated_at|datetime|null: false, foreign_key: false|
|email|string|null: false, foreign_key: false|

### Association
- belongs_to :group
- hasmany :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: false|
|image|string|null: false, foreign_key: false|
|group_id|datetime|null: false, foreign_key: true|
|user_id|datetime|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
- belongs_to :member

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: false|
|group_name|string|null: false, foreign_key: false|
|created_at|datetime|null: false, foreign_key: false|
|updated_at|datetime|null: false, foreign_key: false|

### Association
- hasmany :members
- hasmany :users
- hasmany :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


