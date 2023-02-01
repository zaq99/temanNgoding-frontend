import Button from "./Button";

const Profile = ({ name, bahasa }) => {
    return (
        <div className="mt-8 flex justify-between">
            <div className="flex items-center gap-3">
                <p className="text-xs">Dari :</p>
                <h4 className="font-semibold"> {name}</h4>
            </div>
            <Button text={bahasa} className="bg-kuning-300 py-0" />
        </div>
    );
};

export default Profile;
