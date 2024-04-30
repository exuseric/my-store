'use client'

import { Box, Heading, Container, Flex, Text, Grid, Select } from "@radix-ui/themes";
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ProductPage() {
    const [data, setData] = useState(null)
    const { slug } = useParams()
    const cartName = 'myStoreCartObject'
    console.log(slug)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${slug}`).then(res => res.json()).then(data => {
            setData(data)
        })
    }, [slug])

    console.log(data)

    function addToSessionStorage(data) {
        const addToSessionStorage = JSON.parse(sessionStorage.getItem(cartName))

        if (!addToSessionStorage) {
            sessionStorage.setItem(cartName, [JSON.stringify(data)])
        }
    }

    function handleAddToCart(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)

        const quantity = formData.get('quantity')
        const id = slug

        const data = { quantity, id }
        addToSessionStorage(data)
    }

    return (
        <Box>
            <Container size={'4'} py={'8'}>
                <Grid columns={{ initial: '1', md: `repeat(2, 1fr)` }}>
                    <Image Image src={data?.image} width={450} height={450} alt={data?.title}
                        style={{ objectFit: "contain", objectPosition: "center", maxWidth: '100%', height: "250px", maxHeight: '250px' }} loading="lazy" />
                    <Box maxWidth={'60ch'}>
                        <Heading as="h1" size={'5'} align={'left'} py={'7'}>{data?.title}</Heading>
                        <Text as='h2' size={'6'}>{data?.price}</Text>
                        <Text as="p" size={'2'} align={'left'} my={'5'}>{data?.description}</Text>
                        <form onSubmit={handleAddToCart}>
                            <Flex direction={'row'} wrap={'wrap'} justify={'start'} align='center' gap={'2'}>
                                <Text as="label">Quantity</Text>
                                <Select.Root defaultValue="1" name="quantity">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>Quantity</Select.Label>
                                            <Select.Item value="1">1</Select.Item>
                                            <Select.Item value="2">2</Select.Item>
                                            <Select.Item value="3">
                                                3
                                            </Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
                            </Flex>

                            <button style={{ padding: '0.4rem 1rem', background: 'var(--custom-accent)', border: '2px solid currentColor', margin: '0.8rem 0' }} type="submit" value="addToCart">Add To Cart</button>
                        </form>
                    </Box>

                </Grid>
                <Flex direction={'row'} wrap={'wrap'} justify={'between'} align={'start'} py={'4'}>
                </Flex>
            </Container>
        </Box>
    )
}