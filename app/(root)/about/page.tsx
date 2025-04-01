import React from 'react';

async function Page(props) {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums")
    if (!response.ok) throw new Error('Failed to fetch data')
    const albums = await response.json()
    return (
        <div>
            {albums.map(item=> (
                <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base">
                            {item.title}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Page;