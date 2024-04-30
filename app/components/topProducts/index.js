import { Container, Heading } from "@radix-ui/themes";
import styles from './topProducts.module.css'
import ProductGrid from "../productGrid";

async function getTopProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=3', { next: { revalidate: 13600 } })

    if (!res.ok) throw new Error('Failed to get data')

    return res.json()
}

export default async function TopProducts() {
    const topProducts = await getTopProducts()
    return (
        <Container size={'4'} className={styles.container} py={'9'}>
            <Heading as='h1' weight={'bold'} wrap={'pretty'} align={'left'} size={'9'} className={styles.h1}>Top Products</Heading>

            <ProductGrid column_count={3} products={topProducts} />
        </Container>
    )
}