const CompanySection = () => {
    const imageUrl: string = '/img.png';
    const companyName: string = 'Semicolon Africa';
    return (
        <section
            className="bg-center bg-cover bg-no-repeat w-full relative h-36"
            style={{ backgroundImage: `url(${imageUrl})`, height: '148px' }}
        >
            <div className={''}>
                <div>
                    <div className="w-8 h-8">
                        <img src="/logo.svg" alt="company logo" className="w-8 h-8" />
                    </div>
                    <p className="text-white">{companyName}</p>
                </div>
                <button>View Profile</button>
            </div>
        </section>
    );
};

export default CompanySection;
