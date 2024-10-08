import {React, useState} from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/searchbar/SearchBar';
import './allMajor.scss';

function AllMajors() {

  const [itemm,setItem] = useState("");
  
  const majors = [
    "💰 Accounting",
    "🧮 Actuarial Science",
    "🎖 Aerospace Studies and Military Science",
    "✊ African American Studies",
    "👵 Aging and Longevity Studies",
    "🇺🇸 American Studies",
    "🏛 Ancient Civilization",
    "🦴 Anthropology",
    "🌱 Applied Climate Science and Energy Technologies",
    "🧪 Applied Physics",
    "🎨 Art",
    "🖼 Art History",
    "🤖 Artificial Intelligence, Modeling and Simulation",
    "🇯🇵 Asian Languages and Literature",
    "🔭 Astronomy",
    "🎓 Bachelor of Applied Studies",
    "🎓 Bachelor of Liberal Studies",
    "🧬 Biochemistry and Molecular Biology",
    "🦠 Biology",
    "🤖 Biomedical Engineering",
    "🏥 Biomedical Sciences",
    "💼 Business",
    "📊 Business Analytics and Information Systems",
    "🧪 Chemical Engineering",
    "🧪 Chemistry",
    "🦴 Chiropractic Medicine Preprofessional Program",
    "🎬 Cinema",
    "🏗 Civil Engineering",
    "🏛 Classical Languages",
    "🧪 Clinical and Translational Science",
    "🗣 Communication Studies",
    "💻 Computer Science",
    "💻 Computer Science and Engineering",
    "🛋 Counseling and Behavioral Health Services",
    "⚖️ Criminology, Law, and Justice",
    "🌍 Critical Cultural Competence",
    "💃 Dance",
    "📊 Data Science",
    "🦷 Dentistry Preprofessional Program",
    "♿ Disability Studies",
    "💵 Economics",
    "🍎 Education",
    "🤝 Education Studies and Human Relations",
    "⚡️ Electrical Engineering",
    "🍎 Elementary Education",
    "🛠 Engineering",
    "📚 English",
    "🖋 English and Creative Writing",
    "💼 Enterprise Leadership",
    "💼 Entrepreneurial Management",
    "🌱 Environmental Engineering",
    "🌎 Environmental Policy and Planning",
    "🌱 Environmental Sciences",
    "⚖️ Ethics and Public Policy",
    "🎉 Event Management",
    "🏋️‍♀️ Exercise Science",
    "💵 Finance",
    "🇫🇷 French",
    "🚺 Gender, Women's, and Sexuality Studies",
    "🗺 Geographic Information Science",
    "🌎 Geography",
    "🌎 Geoscience",
    "🇩🇪 German",
    "🏥 Global Health Studies",
    "⛑ Health Promotion",
    "🏥 Health Studies",
    "📖 History",
    "🫀 Human Physiology",
    "✊ Human Rights",
    "⚙️ Industrial and Systems Engineering",
    "💻 Informatics",
    "🌎 Interdepartmental Studies",
    "💼 International Business",
    "🌎 International Relations",
    "🌎 International Studies",
    "🏆 Interscholastic Athletic or Activities Administration",
    "🇮🇹 Italian",
    "📰 Journalism and Mass Communication",
    "🇱🇦 Latin American Studies",
    "⚖️ Law Preprofessional Program",
    "👑 Leadership Studies",
    "🗣 Linguistics",
    "💼 Management",
    "📣 Marketing",
    "🧮 Mathematics",
    "⚙️ Mechanical Engineering",
    "🧪 Medical Laboratory Science",
    "⚕️ Medicine Preprofessional Program",
    "🏛 Medieval Studies",
    "🦠 Microbiology",
    "⚰️ Mortuary Science Preprofessional Program",
    "🏛 Museum Studies",
    "🎶 Music",
    "🪶 Native American and Indigenous Studies",
    "⚓ Naval Science and Technology",
    "🧠 Neuroscience",
    "💰 Nonprofit Leadership and Philanthropy",
    "☢️ Nuclear Medicine Technology",
    "💉 Nursing",
    "💉 Nursing RN-BSN",
    "🤲 Occupational Therapy Preprofessional Program",
    "❓ Open Major or Undecided",
    "👁️ Optometry Preprofessional Program",
    "💊 Pharmacy Preprofessional Program",
    "🤔 Philosophy",
    "🚶‍♀️ Physical Therapy Preprofessional Program",
    "⚕️ Physician Assistant Preprofessional Program",
    "⚛️ Physics",
    "🦶 Podiatric Medicine Preprofessional Program",
    "🌎 Political Risk Analysis",
    "🏛 Political Science",
    "🇵🇹 Portuguese",
    "🧠 Psychology",
    "💻 Public Digital Arts",
    "🏥 Public Health",
    "☢️ Radiation Sciences",
    "☢️ Radiation Sciences RT to BS",
    "🙏 Religious Studies",
    "💪 Resilience and Trauma-Informed Perspectives",
    "💰 Risk Management & Insurance",
    "🇷🇺 Russian",
    "🔬 Science Studies",
    "🎬 Screenwriting Arts",
    "🍎 Secondary Education",
    "⚖️ Social Justice",
    "🎭 Social Justice and the Performing Arts",
    "📊 Social Science Analytics",
    "🤝 Social Work",
    "👥 Sociology",
    "🇪🇸 Spanish",
    "🗣 Speech and Hearing Science",
    "🏀 Sport and Recreation Management",
    "📣 Sport Media and Culture",
    "📊 Statistics",
    "🌱 Sustainability",
    "🌱 Sustainability Science",
    "💼 Technological Entrepreneurship",
    "🎭 Theatre Arts",
    "♿ Therapeutic Recreation",
    "🗣 Translation"
  ];

  return (
    <div>
      <SearchBar item={itemm} setItem={setItem}/>
      <ul>
        {majors.filter((item) => {
          const matchesTitle = item.toLowerCase().includes(itemm.toLowerCase());
          return itemm.toLowerCase() === ""
          ? item
          : (matchesTitle)
        }).map((major) => (
          <li className="eachmajor" key={major}>
            <Link to={`/majors/${major.toLowerCase().replace(/\s+/g, '-')}`}>
              {major}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllMajors;