import { BaseModel, types } from 'expo-sqlite-orm'
import * as  SQLite from 'expo-sqlite'

export default class NoteContext extends BaseModel
{
    constructor(obj)
    {
        super(obj);
    }

    static get database()
    {
        return async () => SQLite.openDatabase("MyNote.db");
    }

    static get tableName()
    {
        return "note";
    }

    static get columnMapping()
    {
        return {
            id: { type: types.INTEGER, primary_key: true },
            title: { type: types.TEXT, not_null: true },
            description: { type: types.TEXT, not_null: true }
        }
    }
}