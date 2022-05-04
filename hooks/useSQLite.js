import { SET_LIST_NOTE } from "../redux/slices/noteSlice";
import NoteContext from "../models/NoteContext";
import { useDispatch } from 'react-redux';


export default function useSQLite()
{
    const dispatch = useDispatch();

    const Create_Table = async () =>
    {
        await NoteContext.createTable();
        console.log("Created note table !");
    };

    const Drop_Table = async () =>
    {
        await NoteContext.dropTable();
        console.log("Dropped note table !");
    };

    const Clear_Table = async () =>
    {
        await NoteContext.destroyAll();
        console.log("Cleared all note !");
    };

    const Get_Data = async () =>
    {
        const noteDB = await NoteContext.query();
        dispatch(SET_LIST_NOTE(noteDB));
    };

    const Add_Data = async (newNote) =>
    {
        await NoteContext.create(newNote);
    };

    const Delete_Data = async (id) =>
    {
        await NoteContext.destroy(id);
    };

    return {
        Create_Table, Drop_Table, Clear_Table,
        Get_Data, Add_Data, Delete_Data
    };
}