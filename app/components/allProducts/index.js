import { Container, Heading, Flex, Card, Box, Text, Link, Grid } from "@radix-ui/themes";
import styles from './allProducts.module.css'
import ProductGrid from "../productGrid";

async function getAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 13600 } })

    if (!res.ok) throw new Error('Failed to get data')

    return res.json()
}

export default async function AllProducts() {
    const data = await getAllProducts()
    return (
        <Container size={'4'} py={'9'} className={styles.container}>
            <Heading as="h2" weight={'bold'} size={'9'} className={styles.h1} wrap={'pretty'} align={'left'}>All Products</Heading>
            <Container size={"2"} className={styles.container_inner}>
                <ProductGrid column_count={4} products={data} />
                <Flex display={'flex'} direction={'row'} wrap={'wrap'} gap={'2'} justify={'between'} align={'center'} py={'9'}>
                </Flex>
            </Container>
        </Container>
    )
}