---
title: 'Bridging the gap between scarcity and equity: Initial NFT Offerings'
description: Non-fungible tokens and equity tokens
date: 2021-05-18
tags:
  - ethereum
  - fundraising
  - kickstarter
  - nfts
layout: layouts/article.njk
banner:
  description: How to issue scarce tokens and equity tokens to raise funds for NFT projects
published: true
---
The various ways by which new projects and ventures raise funds within the Ethereum community are continually evolving. The first seismic event occurred just over a year after the launch of Ethereum in 2015, when many of the community's early token holders rallied behind [The DAO](https://www.gemini.com/cryptopedia/the-dao-hack-makerdao), an early decentralized autonomous organization (DAO) intended to function as an investor-directed venture capital firm. Whilst things didn’t end well for The DAO, the $150 million experiment has served as a catalyst for more dynamic crowdfunding mechanisms.

In 2017 a crypto / blockchain hype cycle ushered in a frenzy of [Initial Coin Offerings](https://www.sec.gov/ICO) (ICOs). This form of crowdfunding - the selling of newly created tokens to fund the development and launch of a blockchain protocol or application - raised billions of dollars for a range of projects. A new generation of blockchain ventures emerged, significantly shaping both Ethereum and the wider crypto ecosystem. However, with thousands of unique token sales raising more than $10 billion, the ICO gold rush also gave rise to a variety of exit scams and unethical business practices that resulted in negative attention and increased regulatory scrutiny.

With ICOs falling into disrepute a more thoughtful phase of innovation was necessary to find more responsible, equitable ways to raise capital. When going down the crypto-rabbit-hole, I found many ideas and iterations of previous ideas, and the one that stuck with me was Thibauld Favre's whitepaper [‘Continuous Organizations’](https://hackernoon.com/introducing-continuous-organizations-22ad9d1f63b7) published in 2018.

‘Continuous Organisations’ explains why it makes a great deal of sense for both entrepreneurs and investors to raise investment capital in a continuous, liquid and programmable manner. Thankfully this is no longer a pipe dream. With [Fairmint](https://fairmint.co/), Thibauld Favre has brought his vision for 'Continuous Organisations' to the Ethereum ecosystem. After adding a ‘Invest Now’ button to their website, Fairmint enables organisations to begin fundraising. Investments made are issued as digital tokens (technically known as ERC20 tokens) that represent equity in the organisation.

Fairmint are using their own solution, a [Continuous Agreement for Future Equity](https://fairmint.co/cafe-continuous-agreement-for-future-equity) (CAFE), to raise their own investment, and of course their offering is easily accessible on their website. What’s particularly impressive here is that whilst the offering has been live, the Fairmint team has remained 100% focused on product development. A deliberate strategy to prove that it’s entirely feasible to raise funds without requiring an intensive focus on fundraising!

Meanwhile, in the Non-fungible token (NFT) space, new projects tend to follow a different go-to-market playbook, by producing and selling limited collections of NFTs to raise funds for their journey. These collections can include unique content, game items, digital art and music. Fundraising in this manner is similar to running a Kickstarter campaign, where backers receive a product or entitlement in exchange for their financial support. And, like Kickstarter, this is support rather than investment; purchasers of these NFTs do not receive any shares in the company’s stock. 

This issue was famously exposed by Facebook’s $2 billion acquisition of Oculus. 18 months prior to the acquisition, [Oculus’ Kickstarter campaign](https://www.kickstarter.com/projects/1523379957/oculus-rift-step-into-the-game) raised $2.5 million from just under 10,000 backers, none of whom could access the upside of the acquisition.

The main purpose of this article is to explore whether the benefits of ‘Kickstarter crowdfunding’ and [‘Equity crowdfunding’](https://www.forbes.com/sites/howardmarks/2018/12/19/what-is-equity-crowdfunding/) can be brought together to create a more holistic fundraising journey. Can we seamlessly transition from the Kickstarter model where limited editions are sold to supporters, to equity crowdfunding where shares are issued to investors?

I believe we can achieve this by giving the NFTs that we issue and sell as part of the Kickstarter-like campaign some superpowers. Projects like [ZORA](https://zora.co/manifesto) and [Charged Particles](https://charged.fi/) are becoming the picks and shovels for the NFT industry, their protocols help developers to program permissions and rules into NFTs. With this extensibility in mind, we can imagine the NFTs that we issue and sell (during the Kickstarter-like phase) having the right, but not the obligation, to be exchanged for equity tokens. The parallel with the traditional finance world is a [call option](https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/call-option/) which normally expires after a period of time.

Here’s a high level summary of how a new venture could fundraise in this way:

The Initial NFT Offering begins with the new venture deploying a [smart contract](https://ethereum.org/en/developers/docs/smart-contracts/) which mints and sells their collection of NFTs. Once a NFT is sold the cryptocurrency (for example Ether) is automatically used to purchase equity tokens from the company's CAFE (the legal name of the Fairmint enabled offering) smart contract. The Initial NFT Offering smart contract, which can be thought of as a vault, now owns the CAFE equity tokens. The NFTs owners can return to the vault to swap their NFT for their original allocation of CAFE equity tokens.

This should be time-limited, if NFT owners let the opportunity expire, the equity tokens are repossessed by the issuing organisation. When NFT owners take up the opportunity to claim the equity tokens they do so by returning the NFT, in which case the issuing organisation can choose to resell the NFT.

To summarise, the vault will hold both NFTs and equity tokens. And, with the exception of equity tokens that are being kept under timelock conditions, all tokens are available to the issuing organisation.

For NFT holders this is a fork in the road moment where they must self-assess the value of the NFT versus the allocation of equity tokens. Should they continue on with possession of the NFT where its value is more subjective, or switch it up for the equity tokens where the value is evident in a real-time, liquid market.

In conclusion we can describe this as, Initial NFT Offering + Continuous Organisations. And if we apply some rocket ship analogies the Initial NFT Offering will be the launchpad and Continuous Organisations will be the continual orbit. In reality the selling of NFTs doesn’t have to happen solely at the beginning of the fundraising process, NFTs could be sold at any time along the fundraising journey. To continue with the rocket ship analogies we now have boosters that we can call on to draw attention to the projects fundraising.

The bridge from scarcity to equity brings a new dimension, mitigating the fact that standard NFTs come with no guarantee that demand for them will be there in the future. If this is leading you to believe that crossing the bridge from scarce NFT to equity token is a no brainer, don’t forget about the unique qualities that NFTs possess and the fact that they don’t exist in isolation. The venture that brings the NFT into the world may or may not develop a successful game / world / community for the NFT but an important factor here is that anybody else could come along and develop an entirely new purpose / proposition for it, in which case the NFTs value may be realised further down the line.

The optionality, or fork in the road, brings the choice between scarcity or equity into focus and harmonizes their opposing features. This leads me to believe that Initial NFT Offering + Continuous Organisations can be more compelling together than apart.

From the technical point of view we can be confident of integrating Initial NFT Offerings and Continuous Organisations. Interoperability and composability are a distinguishing feature of Ethereum’s technology, meaning we can easily plug protocols and applications into each other to create something entirely new.

The speed of innovation in blockchain is extremely fast, a bit like dog years, so it would be no surprise if something similar to what I’ve outlined already exists. Please get in touch if you’d like to discuss or contribute to iterations of this idea.
