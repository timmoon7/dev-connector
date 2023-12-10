import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({ education }) => (
  <div className='profile-edu bg-white p-2'>
    <h2 className='text-primary'>Education</h2>
    {education.length > 0 ? (
      education.map((edu) => (
        <div key={edu._id}>
          <h3 className='text-dark'>{edu.school}</h3>
          <p>
            {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
          </p>
          <p>
            <strong>Degree: </strong>
            {edu.degree}
          </p>
          <p>
            <strong>Field Of Study: </strong>
            {edu.fieldofstudy}
          </p>
          {edu.description && (
            <p>
              <strong>Description: </strong>
              {edu.description}
            </p>
          )}
        </div>
      ))
    ) : (
      <h4>No education credentials</h4>
    )}
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;
