'use client'

import { Box, Heading, Container } from "@radix-ui/themes";
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import ProductGrid from "../../components/productGrid";

export default function CategoryPage() {
    const [data, setData] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${slug}`).then(res => res.json()).then(data => {
            setData(data)
        })
    }, [slug])
    // const data = getProducts(slug)
    console.log(data)
    return (
        <Box>
            <Heading as="h1" size={'9'} align={'center'} py={'7'} style={{ textTransform: 'capitalize', padding: '2.5rem 0.4rem' }}>{decodeURI(slug)}</Heading>
            <Container size={'4'}>
                <ProductGrid column_count={4} products={data} />
            </Container>
        </Box>
    )
}