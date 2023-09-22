import Card from './Card';

function ProfileCard(props) {
    return (
        <Card title="Kim" backgroundColor="#3ea04e">
            <p>Kim is a software engineer.</p>
            <p>리액트 공부중입니다.</p>
        </Card>
    );
}

export default ProfileCard;