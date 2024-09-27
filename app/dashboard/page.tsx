import Link from "next/link"

const DashboardPresenter = () => {
  return (
    <div>
        <Link href="/login">
        <button className="p-8">
            ログアウト
        </button>
        </Link>
    </div>
  )
}

export default DashboardPresenter
