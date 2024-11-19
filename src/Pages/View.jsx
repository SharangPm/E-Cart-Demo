import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'


function View() {
  return (
   <>
   <Header/>
    <div className='container mt-5 row ms-5'>
      <div className="col-lg-4">
        <img width={'100%'} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ8NDw8PDg0PDQ0NDQ0NDw8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFyAzODMsOSgtLisBCgoKDg0OFxAQFysdFx8rLS4tLS0tLS0rLS0tLS0tKy0tLS0tLS0tLS0rKy0wKy0tLS0tLS0tKy0rLS0rKy0tLf/AABEIALoBDwMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAACAwQFAQAGB//EAEQQAAICAQEEBgYHBgQFBQAAAAECAAMRBBIhMUEFE1FhcYEGIjKRobEUI0JSYsHRQ1NygpLwM3OiwhXh4vHyFkRjstL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAApEQEBAAIABQMDBAMAAAAAAAAAAQIRAxIhMVEEIkEyQvATYXGRUoHR/9oADAMBAAIRAxEAPwD5gGGDFiGs8NgYDGAxYhrJBghgwFhiAGIYgiGIAQhCCIYiDohCcEIQDwhTwE6IB4Ts9OwD09PTsA5OQpyADOGFOYgAwTDMEwADBMMwSIAswSYZgmALMBowxbRgBMBjCMBoABMAmE0BowWIaxQjVlA1YxYpYxZIMWMWLEasQGIYgCMEAIQhOAQhEHQIQnAIQgHROieAhYgHp6aek6B1Fg2ur6tPv3EVLjt9befISn/gtKf42srB5rVW1n+okfKTcpO9XOHlfhiT02/o/R443alu9VqA/Oc+jaA8LtSve61MPhiLnn5B+nf2/uMWcmyeh62/wtXU3darU/HeJJq+i7qhlkJXk6YdCO3IjmeN7UXh5TvEGJww8QTKQEwSIZgkQADBMMwTAFmAYwwDAFtFtGNFtGC2i2jGi2jAGi2hsYpjGCxGrEiNWVQasasUsakmg1YxYCxiiSBqIwCCojFEQdUQwISLuPlj3wgIthwCEBOhZraDRIiDUaj2P2dXO09p/DFllJ3VjjcrqF9G9DvcOsZhTQONz8D3KPtH4S//AIlp9Nu0lQawf+5uwz57V5Dymfr+kLLz6xwg3LWu5VHZiShZHXLv0nhfNjj9PfyfqtfdacvYx7skCTbMZszuzKmp2Rbb3LxPYjdme2Y9pKxKdLr7ajlWPeDvB8e2K2Z4rFdXurHK49q0Ou0+o3Wr1Np/a1jcT+Jefz7JFrujnpwThkPs2LvRvPkYorLNFr2ryjAWUtuatt4I/v8AvlJ649uy945/V0vlmEQCJq9IaAKvXVEtQx/mrb7rfrM4rLmUqMsbjdUkiARHEQCJSSSIthHMIsiAKaKaOYRTRgpopo1opowU0W0Y0U0qAsRqRKRyS6DljkikEegmdBiiOQQEEcgkUxKI3ZIIH94xBA3do5+E7pbMMobeAwGe0cQfMTPLLQeFgFqIdwbiezJxmXCgKDtcQSoUdo7TMrpCoprBzVVJz2qCTn3TQ0d3W4P2js55nOMHd5Zkb6/ya/o7TKc22f4SYJH3m5L/AH38cGDqtS1r7Z4cFA4KByE70gGZl0yHZrqz1rA+3ZzAPMDhn9YqoD2R9ndu4DuimW7tpn7Zyz/bwWEFjFWGFl7ZFBZ3Zjgk7sQ2ZOxPbMdsT2xFsiNmcKyjYnCsezTlYJWUFYJSGyH0fq+qYgjaqYbNiHgVgdJ6HqnBU7VTjaqbu7D3iAVmjoPrqm0re17dBPJwOHmN3ukW8t38NcffOX5+P+MJlgMspdMbiMEbiIplmm2SdhFMJSyxTCVKEzCJYSlxEuJUCdolo9xEPKhEvEsY54h5pABJQkRXKaxHTOQShBFIJQgmVoMQR6LAQShFmdodVM7hnPLHbEtXvIO78ueR575U2QpIG0Rv2RxPcO+Ati2KGB2lPBvmD3iY8TsZuoTbrdj7a0EeOMD5Gc9Hfq1svbhUgYf5nLzyQf5TBRWANbcCpVG5bx7J/LtlGrq2NFsDjbfk96Dep/1MPKROzTh99+Eg1pKZHtWNjwH9590spGFA5E4Uc3btPdMvR07Vqr9lRs55Ddlm9w+Eqs1ftWLy+qoH4ube74kSUNirBzjfg7JPeOMaEkmhOLfo43imkG0//IxGPkx85qBJewQEhbEeK4Qri5hpNsT3VyrY5c53q4cw0k2IJSVmucNcOYaRlIJSVlIDJHzDSRknKmKOrjcVIIPZKWSKZIb2J0ux9NUjrBaowtyiwAcA3Bh78zMZZtXLt6RTzqtK+CMP1BmYywwy6L4s93T56o2WJdZY6xLrNJWaN1iHEsdZO4lykkcSdxK7BJ7BNIElkQ8pskzzWEGuVVyaqV1QyNRWJVWIisSqsTDKg1FlKLFViU1iZWmNB/fbItVp1VutU7G0fW+4x7T2H++2aSLEa7aQhgNpSMOhGQwHMeX98ZnaAJc6r7HWJjJA9oDtHd3HdL9eMpWOSo747tq1h81+ExKm2Dt0WCvmabj9UT+Fvs/CbuttXZTayrtV6rBS1Z4qyFhwzvxyziTrp+fu0w+nL8+WI2a67ce2zihcccne3yHvlGlqC2Et/h6VCT2Gwf8AVnyURzVA3VON6K2s1ncwBXY+OzFayrZ01dRODexttbmtKjOfdkw8RmHTXdXpHuY/Xay1mA+11Q3Z8OP9U+i0F9lo2zUtdZJxtMS+444Y3ec+b6KU26lLWGAvrKnEV1VrlEHhgDxJ7ZudE3nrerJzsu6+9VPzB98WRxrhZ4rkHHYffOMdusms+sUymeTY3A+cT0drFtO7dtKrgHip4EHwKkeXfFIaXQXF3pJ+1o1Zv4trDfETRQ5LD7rbP+kH85j9Bt9cifdXV1n+tLB/9o67VkIwX279T1dfaBsIGPlvEqwNPZnCs4bPrVqX7Kln7hwA+IMeVk6NOUi2SUlYJERJGSKZJYyxbJDYDp1+pvX8Nb/0t/1TOdZracepd/lY97r+kz3WPGtOJ2x/hG6xDrLHWIdZpKxROsncSxxJ7BNJQisEmsEssElsE1xpI7BJbJXbJbJtiA1SyqR1SyqGQV1SuoSWqV1TDI1NYlNYiKxKhXkeqxVuW4Hf+cxyoOTs5xzUh12W4HnnBB5EHl4zMXUq2arSEfOFcEhC3LfxU9xlOn1TAlHOLF+9uDDtPZ4j/tFlNFrOjmrJzuBO58bj3MOAPu85bqusWjSuiWWFVepxp3ats7W3uH2vbG4gyjV6kpUWTcwBzU+8FeYA/T85mDphTX1L1oK3O3Q1Z2VWwZ2lIO4Z3eBHuJuxeNnWeVNWqRsoetVrPq1W+s1WI72LtLwAIOM7uee0Q+mqdo2Ec2p0lXnh2+Ax5mTJqLwCg2urIwyWPS4I82GPLEudnNSK6ttK9tqOdj6wimxt+yzAMDjnvG/twtfMQX0LWEqtv5EmuvtIBzn37A8jIOjtSVt6w8DqgnnuJm2aOrTq/saSgO55NfslgPfg+Uwb9Ma6NFX+0sst1T9wOyFP9Iz5Qk2G3RqyqsyH6ymx8qeFtDHaI8Qcn3yOu9l1K6hF2KrrLcJtBsNkbWewnCvjxgKrKgtxkOoJBHqsNsjB8RPalepbftCliosB9qtx7L/xDge0ZhjQ0VTY1+0BhLKrrd32XxssPfj4SZW2b+uYZTTK4Rf3mstYnA7hljnsz2Ta0hNiZUA2hdgjIGGI9VwT9g4X+kdkyukqwmyi4cJtKufYe0+25/CNw/8AKWZmmtcAVqc6rUkMz/uad52z34LMB2ET6CtRsrs712Rsnjlcbpk9G6QBjVkva4zqbD7WDvKd2dxI5DA45m7sY3DgN0inCCsWyyhhFsJNNOwiyI9hFtJpOKMVWn7zVIPLaY/NZC6zQu3Ii8yDa383s/6QsksEUq+J314RusnsErcSewTSVmjsElsEssElsmmNJJaJJbLLZJbNsSRWyS2WWyO2b4kCqWUyGoy2ox5BdVLKpDUZZUZz5GebMHc2PFGZfhj5xletP3Uf/KsBP9Lb52k9+PfKjepGH+s/ioNh95U/OZUyi1N+A4xYNwJ9WzHZv9odxh39GMKwQ20i52HGS9OOWOOz3cvCDZXpmGXq2B94nqgT3Ybd7hLtG2yAKw6qPtWMTu7N+/4890V6QM+rUHZaq1Nohdpl5WVj9pWeTLx8Pjj2fa0wYNTawaonGa7vst3Z9k9xzPo9RVneoAKurUEbj1m/1Qp+yfzMg13RCbbLjq67VZgLBgUWgZ9v2dg5I47siGGU2EfR+o26QWJ26rFS1QhJ6rB9fORv3cO7jNyqjTr+1U8Dl63XwIKvkTM9HeiLzqKmAsNdm+4jLq2xZh1fG7fg48Rxm7R0N0hjADkbOyhIrBrHq8nZc7gR5yrwssr7YchldqWodMbK2a2wE2Iw+sQHLAjdh9lcYx3jmBH04vr6rU43UpXotOo52Pjbx4B2H8016fR7UkYse3fxG3p0HjjD/OX1+j9h6pbGRkquOoBJJeyzDY28KBuZs5HYN0rH03E/xp6fN3oVtq0ysq2qmn0+TvU2EF2yOYy0DUdI9aXpurFetr9V0PsahezxI3gjjuxvm5d6G9ba73WKyWPczooYEKRivB5FeOZPb6EXW1hLtWtj1jGn1Bqbr0XPsOdr118d4PA8pePpOJ8waqDoN/q9xd6FIC21779L6wLVWAcVIzhsY3Z3GX6rRmofSHUIwwmk049fqzwVm+8+/cN4BOd5O5+i9DraiXGqXrHV6riKiEuqYY9YbXtg79oeY4k6mq6Gsdtvrl6zeNpkOEU/ZQA7t3E5ye0DdKvpuJ4Guj5rT6z6KDWgFmqfL2u7fU0LxJd+YHEnme0ze6L1XXULaMlWzsORsmxQcbeOQJBIHZiZ+q9DLLWC2Xr1G0GeqtWRrccAzf8ALdyAn0FWgZVC/VqFAVVTa2VUDAHCRfTcXX0iJmimlraJ/wAJ84l9HZ933FT+cyvA4k+2qRtOV17TYPsje57EHH9PONfTuOKN/SZzU4RerHtHBsPfyWc2cs6WKwn3X4S3vtMW7Tnwk7xrGJcxM71Isk1kosMmsMuEmsktkpsMlsM1xKpbZHbKrTJLTN8SSWyO0yq0yO0zoxIdVUsqqk9Usqk5U1NVUrqqk1RllRnPlTU11TtulB9qxlXsXdmeqMcEU79kMew7wffMbTQJQgJapBke1faesYDxY4XzPlKNMXYErnYAJN1hxtDns54L3kAd0adK1hHWnKg+rTXuQfxMePumj9FQgA5PA4G5QfmT3mFy8jSTo+1A+cG+3fjitaDnjO8Dtdt590+09GdNU6ta+y1xcrtY9RVABCoOQ38TvPHunwPSusFWFUdVQDyH1uos+6g4nx4DvO6fZ+g3WHSZtXq2a52CHiqELgHsPjv3zq9HN8Tdhzu+qFG7djHdBNU4IQc9pnt9F6LKwY/rD3e4T233D3RaGiJ6O2+4fGcL/hHxhoip6Gbfwj4xbaj8K/GTbA7PRL6s/dX4/rEWa9uQT3H9ZFzxgWzkx7ukrORUeCj85BqOkrf3hHgAJF42IfTbUi1+roQHrmrHc5G15DjPkdXq7G42Oe4scTG1BmWfGlmtFt9RXbXbtPVnq9oqueePygvXMnofVhadn8bH5Sw60TxOJj77oO2VyayuG2pES9wikpEW1iS21SmyyT2NNZskVtcktqltpkthm2NSz7apHbVNC2SWzoxpArMrqMiQymswyhrq2lVbSCtpTW0xyhtCtpTW8z63lFbzHKG0a3lCPM5HlCWTOw1eF2tvZXb4beBtY8Z9L6M3BqmGRtCwkrzxgYM+VV4xDghlJVhwZSVI8xL4HF/Sz5tbOP0MTs+Lp6Y1K8LQ47LFDfEYPxlaeklw9qmtu9WZPnmeth6/g3vdK2+pnp86vpQPtaewfwMjfPEavpTRzrvXxrVvkxm09Twr90G27OGYw9KdLzaweNF35Cd/9TaP96R41XD/AGy/1uHfun9hqNEPID6SaP8AfjzSwf7Yl/SPSfvx/RZ+kjLPHzCXWSW0yKz0j0n73PhXaf8AbJLvSPTcmsPhTd/+Zjllj5Cq4zPvaT3dP1H2Uubwrx8yJBd0uT7NFn8xRfkTMbnj5I29pnahoNupvfhWieLFv0klmhtf27DjsQbImV4mPkiB0gVcoN4HZ2y6vVExdPRYXlKBpsTDO42h0XmF1xg9VOFJHQOm2LayeYRTmVIQXeT2NDcyd2mmMKlWmS2GOsaTWGbYkWhj0aSKY5GlWBajx6PIUaOR5nYbQR5QlkzkeOSyZ3E2klkelkzUsjVtmdxDTSyOW2Zi2xq2yLibTW2NW2Za3Ri3SLiGmLYYsEzRdDF0XKNtDaHYJ71ewSEXToui5T2t2E7BOGtOwSTrp7roctG1JqTsEE1J2CTm6cN0NUlBrXsgFFiDdAN0rloPIWA2JO10BrY+UHswi2cSdrYtrZUxBzPEvZEvbFPZLmJGPZEO8W9kS9k0mIE7yd2nHeJd5pIlx2iHMJ2iXM0kBYMYrRQhCWD1aNV5MIayLArWyNW2RrDEmw1y2xq3SBTGLJuI2vW6MW6Z4MYJPKNtBb4YvmephAybjBtoi+GL5nAwgZPLDaAvhDUTPBnQYcgaH0ie+kd8gBnsxckC76ROfSJCTOEx8kC03wTfI8wSY+SBWb4s3yVjBJjmMLalrotrpMTAJjmI2e10W1sSYsy5iDWtimsgGLMqQhM8WzTjRZlSB5mi2M6YBlB//9k=" alt="" />
      </div>
     <div className="col-lg-2"></div>
     <div className="col-lg-6">
      <p>Pid:474744747</p>
      <h1>Product Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam quasi a facilis repellendus. Similique culpa ratione neque temporibus nam ipsum repellendus, eius eaque amet nihil. Vel officia quos maxime.
      Non necessitatibus exercitationem accusantium accusamus dolorum itaque velit et odit corporis fugit! Obcaecati fugiat, dolores molestiae accusantium inventore hic quasi eum error labore nam deserunt, nostrum saepe et voluptas iste.
      </p>
      <h3>Price: <span className='text-danger'>$895</span></h3>
      <div className="d-flex justify-content-between">
      <Button className='btn btn-outline-dark'><i className="fa-solid fa-heart text-danger"></i> Wishlist</Button>
      <Button className='btn btn-outline-light'><i class="fa-solid fa-cart-plus text-info"></i>Cart</Button>
      </div>
     </div>
    </div>
   </>
  )
}

export default View
