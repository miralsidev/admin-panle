
// import axios from "axios";
// import React, { useEffect, useState } from 'react'

// const Contact = () => {
//     const [contacts, setContacts] = useState();
//     useEffect(() => {
//         data();
//     }, [])
//     const data = () => {
//         axios.get("http://localhost:5000/Contact/displayContact").then((res) => {
//             setContacts(res.data);
//             console.log("res.data=", res.data);
//         }).catch((error) => {
//             console.error("fetching error == ", error);
//         })
//     }
//     return (
//         <>
//             <div className="input-group mb-3">
//                 <input type="text" className="form-control" placeholder="Search contacts" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
//                     <div className="input-group-append">
//                         <button className="btn btn-outline-secondary" type="button">Search</button>
//                     </div>
//             </div>
//             {contacts ? (
//                 <table className="table table-bordered" style={{ overflowX: 'auto' }}>
//                     <thead>
//                         <tr>
//                             <th>No</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Message</th>
//                         </tr>
//                     </thead>
//                     {
//                         contacts.data?.map((contacts, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td>{contacts.Name}</td>
//                                 <td>{contacts.Email}</td>
//                                 <td>{contacts.Message}</td>
//                             </tr>
//                         ))}
//                 </table>
//             ) : (
//                 <p>Loading users...</p>
//             )}
//         </>
//     )
// }

// export default Contact


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { IsEmpty, Map } from 'react-lodash';

// const Contact = () => {
//     const [contacts, setContacts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredContacts, setFilteredContacts] = useState([]);

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     useEffect(() => {
//         setFilteredContacts(
//             contacts.filter(contact =>
//                 contact.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 contact.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 contact.Message.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//         );
//     }, [searchTerm, contacts]);

//     const fetchContacts = () => {
//         axios.get("http://localhost:5000/Contact/displayContact")
//             .then((res) => {
//                 setContacts(res.data.data);
//                 setFilteredContacts(res.data.data);
//             })
//             .catch((error) => {
//                 console.error("Fetching error: ", error);
//             });
//     };

//     return (
//         <>
//             <div className="input-group mb-3">
//                 <input 
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Search contacts" 
//                     aria-label="Recipient's username" 
//                     aria-describedby="basic-addon2"
//                     value={searchTerm}
//                     onChange={e => setSearchTerm(e.target.value)}
//                 />
//                 <div className="input-group-append">
//                     <button className="btn btn-outline-secondary" type="button">Search</button>
//                 </div>
//             </div>
//             <IsEmpty
//                 value={filteredContacts}
//                 yes="Empty list"
//                 no={() => (
//                     <table className="table table-bordered" style={{ overflowX: 'auto' }}>
//                         <thead>
//                             <tr>
//                                 <th>No</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col">Message</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <Map collection={filteredContacts} iteratee={(contact, index) => (
//                                 <tr key={index}>
//                                     <td>{index + 1}</td>
//                                     <td>{contact.Name}</td>
//                                     <td>{contact.Email}</td>
//                                     <td>{contact.Message}</td>
//                                 </tr>
//                             )} />
//                         </tbody>
//                     </table>
//                 )}
//             />
//         </>
//     );
// };

// export default Contact;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IsEmpty, Map } from 'react-lodash';

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        setFilteredContacts(
            contacts.filter(contact =>
                contact.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.Message.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, contacts]);

    const fetchContacts = () => {
        axios.get("http://localhost:5000/Contact/displayContact")
            .then((res) => {
                setContacts(res.data.data);
                setFilteredContacts(res.data.data);
            })
            .catch((error) => {
                console.error("Fetching error: ", error);
            });
    };

    return (
        <>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search contacts" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
            <IsEmpty
                value={filteredContacts}
                yes={() => "Empty list"}
                no={() => (
                    <table className="table table-bordered" style={{ overflowX: 'auto' }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Map collection={filteredContacts} iteratee={(contact, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{contact.Name}</td>
                                    <td>{contact.Email}</td>
                                    <td>{contact.Message}</td>
                                </tr>
                            )} />
                        </tbody>
                    </table>
                )}
            />
        </>
    );
};

export default Contact;

