type propsFooter = {
    copyright: string;
}

const Footerr =  (props: propsFooter) => {
    return (
        <div>
            <p className='text-center text-gray-400'>{props.copyright}</p>
        </div>
    )
}

export default Footerr