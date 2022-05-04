import { SET_LIST_NOTE } from "../redux/slices/noteSlice";
import NoteContext from "../models/NoteContext";
import { useDispatch } from 'react-redux';


export default function useNoteSQLite()
{
    const dispatch = useDispatch();

    const Create_Note_Table = async () =>
    {
        await NoteContext.createTable();
        console.log("Created note table !");
    };

    const Drop_Note_Table = async () =>
    {
        await NoteContext.dropTable();
        console.log("Dropped note table !");
    };

    const Clear_Note_Table = async () =>
    {
        await NoteContext.destroyAll();
        console.log("Cleared all note !");
    };

    const Get_Note = async () =>
    {
        const noteDB = await NoteContext.query();
        dispatch(SET_LIST_NOTE(noteDB));
    };

    const Add_Note = async (newNote) =>
    {
        await NoteContext.create(newNote);
    };

    const Delete_Note = async (id) =>
    {
        await NoteContext.destroy(id);
    };

    return {
        Create_Note_Table, Drop_Note_Table, Clear_Note_Table,
        Get_Note, Add_Note, Delete_Note
    };
}