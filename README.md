## Inspiration
We wanted to find a possible software solution that would disrupt the current way we go about dealing and financing loans, as well as generating a passive income.

## What it does
PeerPal is a peer-to-peer web platform that enables users to accrue a passive income, as well as allow them to take on loans (when needed) with a lower interest rate via our implementation of a distributed system that utilizes current international currencies.

## How we built it
We started off breaking down the algorithmic theory behind using a peer-to-peer system as the model for our distribution system. We analyzed the most practical and efficient ways to implement a peer-to-peer system on a small-scale as a proof of concept for further and larger scalability. From there, we researched the technical details of what technology(ies) we would use (VueJS, JavaScript, socket.io, Node.JS) to implement this solution, as well as solving logistical issues like Resource Starvation (an imbalance in the fluidity of currency - imbalanced rates of lending and leeching that caused an overall deficit to the system as a whole.)

## Challenges we ran into
Some of the largest challenges we ran into were as follows:
- Communication between peers in an efficient manner
- Solving critical system faults, such as the aforementioned resource starvation
- Formulating an algorithm that has a balance seeding-to-leeching rate

## Accomplishments that we're proud of
- Possible solutions for the resource starvation issue
- Utilizing the WebRTC to build a mock peer-to-peer network

## What we learned
- The basics of peer-to-peer networking and emulation
- The complications of Distributed Systems
- New development stack (VueJS, socket.io)

## What's next for PeerPal
We hope to take on this project and implement it in a way fitting with how we envision it fully functioning: as a fair monetary platform that benefits all economic classes!
