---
layout: paper
title: Steady conformally Kähler Ricci solitons with isoparametric potential
title_ja: 等径ポテンシャルを持つ共形Kähler定常Ricciソリトンの分類
authors: Ernani Ribeiro Jr, Hung Tran
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We classify complete, non-compact, simply connected, irreducible four-dimensional steady gradient Ricci solitons that are globally conformally K\"ahler and have an isoparametric potential. The steady Ricci solitons are $U(2)$-invariant nuts on $\mathbb R^4$, including the Bryant and Cao solitons, and bolts on $\mathbb{S}^2 \times \mathbb R^2$ and on $\mathcal O(-m)\to\mathbb{CP}^1$. For each $m\ge3$ there is exactly one non-collapsed bolt. A key step, valid for Ricci solitons of every sign, is that away from the locally conformally flat case, the conformal factor is aligned with the potential function, which yields cohomogeneity-one symmetry.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- curvature
arxiv_id: 2610.40994v1
arxiv_url: https://arxiv.org/abs/2610.40994
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: 実4次元の定常勾配Ricciソリトンを、共形Kähler性とポテンシャルの等径的条件のもとで分類する。完備・非コンパクト・単連結・既約という仮定から1変数の対称的モデルに帰着し、高次数の線束上では非崩壊モデルの一意性を示す。
abstract_en: ''
summary_en: The article studies a four-dimensional class containing both Kähler steady solitons and the Bryant example. A condition on the regular levels of the potential combines with global conformal Kähler geometry to force a strong symmetry reduction. The resulting complete metrics are organized by their singular orbit and normalized shooting parameters. In higher-degree line-bundle cases, the threshold parameter singles out a unique noncollapsed model.
abstract_ja: Kähler計量に大域的に共形な実4次元の定常勾配Ricciソリトンを扱う。ポテンシャルが非定数で、各正則レベルの連結成分上で勾配の長さが一定となる場合に、完備・非コンパクト・単連結・既約な解を分類する。モデルは実4次元空間上のnut型と、2球面上の線束などに現れるbolt型からなり、次数mが3以上の各線束には非崩壊boltが一つ存在する。局所共形平坦でない場合に共形因子がポテンシャルに整列することが、分類の基礎となる。
abstract_source_url: https://arxiv.org/abs/2610.40994
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.40994v1](https://arxiv.org/abs/2610.40994)
- **著者:** Ernani Ribeiro Jr, Hung Tran
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

RicciソリトンはRicci流の自己相似解を生み、特異点のモデルとして重要である。実4次元でも定常ソリトンの一般分類は難しく、本論文はKähler計量に共形なクラスと、ポテンシャルの等径的条件に焦点を絞る。

完備、非コンパクト、単連結、既約という仮定のもと、著者らはすべての対象をnut型とbolt型の明示的なパラメータ族に分類する。nut型にはBryantソリトンとCaoソリトンが含まれ、bolt型には球面上の負の次数の線束が現れる。

大きな役割を果たすのが、共形因子とポテンシャルの関数的従属性である。局所共形平坦な場合を除くと両者の微分が同じ方向になり、余等質性1の対称性へ進める。分類では存在だけでなく、正規化パラメータの範囲と、高次数の非崩壊boltの一意性を確定する。

## 背景と問題設定

勾配Ricciソリトンの方程式は

$$
\operatorname{Ric}+\nabla^2f=\lambda g
$$

であり、定常の場合は $\lambda=0$ である。大域的共形Kähler性とは、$M$ 上の滑らかな関数 $u$ と複素構造 $J$ が存在し、$e^{2u}g$ がKähler計量となることである。

定理で用いるleafwise transnormal条件は、$|\nabla f|^2$ が各正則レベルの各連結成分上で一定となることをいう。単に全体のスカラー曲率を一定とする条件ではない。Kähler計量そのものに限定せず、その共形クラスまで広げることでBryantとCaoの両方を含める。

## 主結果

### 完備定常ソリトンの分類（Theorem 1.1）

連結・完備・非コンパクト・単連結・既約な実4次元定常勾配Ricciソリトンで、非定数のleafwise transnormalポテンシャルを持ち、大域的に共形Kählerであるものは、等長同型、相似拡大、$f$ への定数加算を除いて次のいずれか一つとなる。

| 型 | 多様体 | 正規化パラメータ |
| --- | --- | --- |
| nut | $\mathbb R^4$ | $\delta\in(-\infty,0]$ |
| twisted bolt、$m=1,2$ | $\mathcal O(-m)\to\mathbb{CP}^1$ | $\mu\in(-\infty,0)$ |
| twisted bolt、$m\geq3$ | $\mathcal O(-m)\to\mathbb{CP}^1$ | $\mu\in(-\infty,\mu\_m]$、一意な $\mu\_m<0$ |
| untwisted bolt | $S^2\times\mathbb R^2$ | $\mu\in(-\infty,0)$ |

モデルの計量は距離座標を用いて

$$
g=dt^2+p(t)^2\eta^2+q(t)^2h,\qquad f=f(t),\qquad d\eta=c\omega\_h,\qquad K\_h=4
$$

と書く。nutでは端点が滑らかな点となり、boltでは滑らかな2球面となる。nutを $f(0)=0,f''(0)=-1$、boltを $q(0)=1,f(0)=0$ で正規化し、$\delta=p^{(3)}(0)-q^{(3)}(0)$、$\mu=f''(0)$ とする。

$\delta=0$ はBryant、$\delta=-1/2$ はCaoのソリトンである。$m\geq3$ では端点 $\mu\_m$ に対応するboltだけが非崩壊で、それより小さいパラメータでは崩壊する。非崩壊は曲率スケールでの体積比に一様な正の下界がある意味である。定理は逆に、列挙されたすべての軌道が仮定を満たすことも含む。

### 共形因子の整列（Theorem 1.2）

連結な実4次元勾配Ricciソリトンで、非定数のleafwise transnormalポテンシャルと大域的共形Kähler性を仮定すると、

$$
W\_g\equiv0\quad\text{または}\quad du\wedge df\equiv0
$$

が成り立つ。$W\_g$ はWeylテンソルである。この結果は $\lambda$ の符号や完備性を仮定しない。$du\wedge df\ne0$ となる点の近傍では、計量は区間と3次元空間形のワープ積となる。

### 非共形平坦・閉多様体への帰結（Corollaries 1.1, 1.2）

局所共形平坦でなければ $du\wedge df=0$ であり、$f$ の正則点の近傍で $u=U(f)$ と書ける。さらに多様体が閉なら、$\lambda>0$ で局所共形平坦ではなく、整列が全体で成り立つ。

## 証明の見取り図

IntroductionではCottonテンソルの恒等式とWeylテンソルを使って整列の二者択一を得ると説明する。定常の場合にはこの局所構造を大域化し、特異軌道と基礎多様体を分類する。

残る問題は常微分方程式の軌道解析となる。正規化した初期パラメータを用いて完備性と漸近挙動を調べ、積分因子の恒等式、線形化系、障壁を組み合わせて高次数のしきい値の一意性を示す。全曲率の符号や漸近形を最初から仮定した分類ではない点を著者らは強調している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.40994)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.40994v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; Corollaries 1.1, 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.40994v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
