import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className= { styles.profileContainer }>
            <img src="https://github.com/Garccosta.png" alt="profile picture" />
            <div>   
                <strong> Gabriel Costa </strong>
                <p> 
                    <img src="icons/level.svg" alt="level"></img>
                    Level 10
                </p>
            </div>
        </div>
    );
}