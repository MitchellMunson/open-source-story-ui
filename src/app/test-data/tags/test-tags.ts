
import {Tag, TagGroup} from "../../models/tag.model";

/*
  Test Data Naming Conventions:
    <Type>_UNDEFINED = entire object undefined
    <Type>_Null = entire object null
    <Type>_FIELDS_UNDEFINED = initiated object with undefined fields
    <Type>_FIELDS_NULL = initiated object with null fields
    <Type>_FIELDS_BLANK = initiated object with:
        string fields being empty strings,
        numeric fields being set to 0,
        and object fields being set to <TYPE>_FIELDS_BLANK as well

  <Type>_FIELDS_BLANK> should be used in constructors.
  All Enums should have a default value.
 */
export const TAG_FIELDS_BLANK: Tag = {
  tagName: '',
  tagDescription: ''
}

export const TAG_GROUP_FIELDS_BLANK: TagGroup = {
  tagGroupDescription: '',
  tags: []
}
