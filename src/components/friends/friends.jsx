import friendsData from './friends.json'

const friends = () => {
    const { avatar, name, isOnline, id } = friendsData
    return (
        <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
    )
}
