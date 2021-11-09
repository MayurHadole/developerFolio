import React, {useContext} from "react";
import "./SoftwareSkill.scss";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill(props) {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <p
        className={
          isDark
            ? "dark-mode subTitle skills-text-subtitle"
            : "subTitle skills-text-subtitle"
        }
      >
        {props.skillType.skillTypeName}
      </p>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.skillType.skills.map((skills, i) => {
            const Icon = skills.iconName;
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {props.skillType.areReactIcon ? (
                  <Icon />
                ) : (
                  <img src={skills.imageName} alt={skills.skillName} />
                )}

                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
