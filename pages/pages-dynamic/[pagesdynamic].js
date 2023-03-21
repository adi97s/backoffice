export default function pagesDynamic({ pagesdynamic }) {
    return (  
        <h1>Page Dynamic {pagesdynamic}</h1>
    )
}

export async function getServerSideProps(context) {
    let { pagesdynamic } = context.params

    return {
        props: {
            pagesdynamic
        }
    }
}