type propsTodoo = {
    list: string;
}

const Todoo =  (props: propsTodoo) => {
    return (
        <div className='mx-auto max-w-4xl'>
            <span className='text-center italic my-2 text-2xl'>{props.list}</span>
        </div>
    )
}

export default Todoo