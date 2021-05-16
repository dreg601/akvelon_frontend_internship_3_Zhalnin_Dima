import React from "react";
import {Carousel} from "react-bootstrap";

export default function Slider() {
    return(
        <Carousel style={{
            'display': 'block',
            'margin-left': 'auto',
            'margin-right': 'auto'}}
            className='carousel-dark'
            wrap={false}>
            <Carousel.Item className=''>
                <img
                    style={{'width': '100%', 'height': '600px'}}
                    src='https://img.gazeta.ru/files3/311/9705311/desert-pic905-895x505-28702.jpg'
                    alt='First photo'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{'width': '100%', 'height': '600px'}}
                    src='https://kipmu.ru/wp-content/uploads/prrda2-scaled.jpg'
                    alt='Second photo'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{'width': '100%', 'height': '600px'}}
                    src='https://lh3.googleusercontent.com/proxy/0GqC1VDK0ZtciZXMdnU8vBEa3kEXIRlr0kw6TuS5A_uQQcfhpsscGEonPxxchmX6_WcND0RZyZgtN5MASpj_g3R0YvCVqCPDNYVpzSZRsagxgA7PVg'
                    alt='Third photo'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{'width': '100%', 'height': '600px'}}
                    src='https://55341418bc55394fbe0f-65d6d0e87ce8126fb80e16752287ad6c.ssl.cf1.rackcdn.com/95004b6c-1539-11e5-964b-08606e697fd7/large.jpeg'
                    alt='Аourth photo'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{'width': '100%', 'height': '600px'}}
                    src='https://kubnews.ru/upload/iblock/a61/a616a0977e9f98fff2f831fe7f316e24.jpg'
                    alt='Fifth photo'
                />
            </Carousel.Item>
        </Carousel>
    )
}
