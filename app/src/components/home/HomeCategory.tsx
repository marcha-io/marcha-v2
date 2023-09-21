import React from 'react';


type Prop = { label: string, url: string }


const HomeCategory = ({ label, url }: Prop): React.ReactElement => {
  return (
    <div>
      <h3 className="font-semibold text-white">
        <a href={url}>
          <span className="absolute inset-0"></span>
          {label}
        </a>
      </h3>
      <p aria-hidden="true" className="mt-1 text-sm text-white">Browse listings</p>
    </div>
  );
}


export default HomeCategory;
