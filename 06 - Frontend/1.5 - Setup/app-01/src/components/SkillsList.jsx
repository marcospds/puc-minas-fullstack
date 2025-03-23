export function Skillslist({ skills }){
    return (
        <ul>
            {skills.map((skill) => <li>{skill}</li>)}
        </ul>
    )
}