![Civil Services Logo](https://cdn.civil.services/common/github-logo.png "Civil Services Logo")

__Civil Services__ is a collection of tools that make it possible for citizens to be a part of what is happening in their Local, State & Federal Governments.

[![Donate](https://cdn.civil.services/donate-button.png)](https://www.paypal.me/civilservices)


United States Governors
===

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/CivilServiceUSA/us-governors/master/LICENSE)  [![GitHub contributors](https://img.shields.io/github/contributors/CivilServiceUSA/us-governors.svg)](https://github.com/CivilServiceUSA/us-governors/graphs/contributors)

![Screenshot](screenshot.gif "Screenshot")

We have also built an interactive search tool that can show you some interesting demographic data on US Governors.

## [★ Search US Governors ⧁](https://civilserviceusa.github.io/us-governors/)


Introduction
===

This project provides the __[US Governors Data](./us-governors)__ ( JSON, XML, CSV, SQL & YML formats ) & Headshots.  See [Provided Data](#provided-data) below for full list of data in this project.


Data Source
---

Our team Manages the [United States Governors Demographic Data](https://docs.google.com/spreadsheets/d/1AMwiClcbogCc1LoIlwX8M2vFGNzGK3NQWY5Qrk6sNuc/edit#gid=284703522).  This document is Read Only for the general public.  If you would like to update this document, [Join our Slack Team](https://slack.civil.services/bkx7n2) to learn how.


Completed Tasks
---

We have completed the following Data Collection for this set of data. [Watch Project](https://github.com/CivilServiceUSA/us-governors/subscription) to be notified of updates.

- [X] US Governors Data Created
- [X] Governors Headshots Created
- [X] Images Uploaded to CDN
- [X] Published NPM Package


Governor Headshots
---

Civil Services created high-resolution photos for each US Governor and made them available in the following sizes:

* 1024 x 1024 pixels
* 512 x 512 pixels
* 256 x 256 pixels
* 128 x 128 pixels
* 64 x 64 pixels

You can either copy the `headshots` folder into your project, or we also offer a CDN.

If you are using the image `headshots/512x512/charles-baker.jpg` the CDN for that file would be `https://cdn.civil.services/us-governors/headshots/512x512/charles-baker.jpg`


Governor Data
---

This project offers data for the United States Governors in the following formats:

* [CSV](us-governors/data/us-governors.csv)
* [JSON](us-governors/data/us-governors.json)
* [SQL](us-governors/data/us-governors.sql) & [SQL Table](us-governors/data/us-governors.table.sql) 
* [XML](us-governors/data/us-governors.xml)
* [YML](us-governors/data/us-governors.yml)

Provided Data
---

The following information is available for each Governor.

<details>
  <summary>Expand Details</summary>

Parameter               | Type   | Description
------------------------|--------|----------------
`state_name`            | string | Name of State
`state_state_name_slug` | string | Name of State converted to lowercase letters and spaces replaced with dashes
`state_code`            | string | Two Letter State Abbreviation
`state_code_slug`       | string | Two Letter State Abbreviation in lowercase letters
`votesmart`             | string | The numeric ID for this Governor on VoteSmart.org ( http://votesmart.org/candidate/69494 )
`title`                 | enum   | Title of Governor
`party`                 | enum   | Political Party of Governor
`name`                  | string | Full Name of Governor
`name_slug`             | string | Full Name of Governor converted to lowercase letters and spaces replaced with dashes
`first_name`            | string | First Name of Governor
`middle_name`           | string | Middle Name of Governor
`last_name`             | string | Last Name of Governor
`name_suffix`           | string | Name Suffix of Governor
`goes_by`               | string | Name Governor Prefers to go by
`pronunciation`         | string | How to Pronounce Governor's Name
`gender`                | enum   | Gender of Governor
`ethnicity`             | enum   | Ethnicity of Governor
`religion`              | enum   | Religion of Governor
`openley_lgbtq`         | enum   | Governor is Openly LGBTQ
`date_of_birth`         | date   | Date of Birth of Governor
`entered_office`        | date   | Date Governor First Entered Office
`term_end`              | date   | Date Governor's Current Term Ends
`biography`             | string | Governor's Biography from Congress.gov
`phone`                 | string | Work Phone Number of Governor
`fax`                   | string | Work Phone Number of Governor
`latitude`              | float  | GPS Latitude of Office
`longitude`             | float  | GPS Longitude of Office
`address_complete`      | string | Work Mailing Address of Governor
`address_number`        | number | Mailing Address Number
`address_prefix`        | string | Mailing Address Prefix
`address_street`        | string | Mailing Address Street
`address_sec_unit_type` | string | Mailing Address Section Unit Type
`address_sec_unit_num`  | number | Mailing Address Section Unit Number
`address_city`          | string | Mailing Address City
`address_state`         | string | Mailing Address State
`address_zipcode`       | string | Mailing Address zipcode
`address_type`          | string | Mailing Address Type
`website`               | string | Governor's Website
`contact_page`          | string | Governor's Contact Page
`facebook_url`          | string | Facebook URL
`twitter_handle`        | string | Twitter Handle of Governor ( not always available )
`twitter_url`           | string | Twitter URL of Governor ( not always available )
`photo_url`             | string | Photo URL of Governor ( not always available )

* `photo_url` is available in the following sizes: 64x64, 128x128, 256x256, 512x512 & 1024x1024 ( defaults to 512x512 )

</details>
