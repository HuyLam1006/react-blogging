import { Button } from 'components/button'
import React from 'react'
import styled from 'styled-components'

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 600px;
      color: #fff;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
    &-image {
      img {
        width: 400px;
      }
    }
  }
`

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Wave Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum sequi quia soluta ratione deserunt modi beatae placeat
              commodi quod accusamus iste minus laboriosam, laudantium, quos id
              distinctio repellendus, ad fugit.
            </p>
            <Button to="/sign-up" kind="secondary">
              Get started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/img-banner2.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  )
}

export default HomeBanner
