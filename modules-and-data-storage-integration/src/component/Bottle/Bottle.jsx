import React, { use } from 'react';

const Bottle = ({ bottlePromise }) => {

    const bottle = use(bottlePromise);
    console.log(bottle);

    return (
        <div>

        </div>
    );
};

export default Bottle;