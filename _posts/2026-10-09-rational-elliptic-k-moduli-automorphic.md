---
layout: paper
title: K-Moduli Wall Crossing and Automorphic Forms for the Moduli Space of Rational Elliptic Surfaces
title_ja: 有理楕円曲面のKモジュライ壁越えと保型形式
authors: Masafumi Hattori, Yota Maeda
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.NT
arxiv_abstract: Using K-moduli spaces for log quasimaps $q_t\colon\left(\mathbb P^1,\frac{1-t}{12}D\right)\to[\mathbb A^2/\mathbb G_m]$ of degree twelve with twelve points and weight $t/12$, we construct a modular interpolation $\{\mathcal M_t\}_{0\le t\le1}$ between the Baily--Borel compactification of the Heckman--Looijenga ball quotient $X_o$ and Miranda's GIT compactification of the moduli space of rational elliptic surfaces. We completely determine the wall-crossing and, for every rational $t\in[0,1]$, identify \[ \mathcal M_t\cong\operatorname{Proj}R\!\left(X_o,\mathcal L+\frac t2\Delta(6)+\frac t3\Delta(9)\right), \] where $\mathcal L$ is the automorphic $\mathbb Q$-line bundle and $\Delta(6),\Delta(9)$ are distinguished Heegner divisors. On the automorphic side, we construct a new automorphic form on $X_o$ via a Borcherds product, whose divisor gives an independent relation among the Heegner divisors. This relation provides a key input for determining the birational transformations
  in the K-moduli wall-crossing. As part of this analysis, we show that the first positive chamber $\mathcal M_t$ for $t\in (0,1/7)$ is Looijenga's semi-toroidal compactification.
topic: algebraic-geometry
tags:
- k-stability
- moduli
- birational-geometry
- hodge-theory
arxiv_id: 2610.10777v1
arxiv_url: https://arxiv.org/abs/2610.10777
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: 有理楕円曲面の判別式とWeierstrass方程式を重み付きquasimapとして統一し、球商のBaily–Borelコンパクト化とMirandaのGITコンパクト化をKモジュライ壁越えで結ぶ。Hodge偏極とHeegner因子の関係を計算して中間モデルと壁を決定するが、Introductionで掲げる別の因子方向の予想は未解決として残る。
abstract_en: ''
summary_en: A rational elliptic surface carries both a Weierstrass equation and a discriminant configuration, and the familiar compactifications emphasize different parts of these data. This paper uses weighted quasimaps to place their comparison inside a single moduli problem. The authors match the resulting stability chambers with models determined by automorphic divisor classes, using Hodge polarizations and an additional Borcherds product. They also distinguish this interpolation from the different divisor ray in the conjectural program stated at the outset.
abstract_ja: 有理楕円曲面の二つの古典的コンパクト化を、対数quasimapの安定性を変化させるモジュライ空間の族で比較する研究である。著者らは各有理パラメータに対応する空間を球商上の明示的な因子の切断環のProjと同一視し、最初の正のchamberをLooijengaのsemi-toroidalコンパクト化と特定する。Borcherds積から得る新しい保型形式とHodge偏極の計算により、壁で起こるflipや因子収縮を記述する。
abstract_source_url: https://arxiv.org/abs/2610.10777
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** K-Moduli Wall Crossing and Automorphic Forms for the Moduli Space of Rational Elliptic Surfaces
- **著者:** Masafumi Hattori, Yota Maeda
- **arXiv:** [2610.10777v1](https://arxiv.org/abs/2610.10777)
- **初回投稿日 / 更新日:** 2026-10-07 / 2026-10-07
- **主分類:** math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)。著作権は原著者等の権利者に帰属する。

## 要約

有理楕円曲面のモジュライには、Weierstrass方程式から作るGITコンパクト化と、判別式の周期写像から得られる球商のBaily–Borelコンパクト化がある。同じ滑らかな対象を含んでいても、境界で保持する情報が異なるため、両者を結ぶ中間空間の意味は自明でない。

本論文は、判別式の12点を境界として記録し、Weierstrass方程式に由来するpencilをquasimapのデータとして記録する。両者の重みを変化させることで、端点のコンパクト化だけでなく、中間モデルにもモジュライとしての意味を与える。

さらに、その変化を球商上のHeegner因子の係数の変化と対応させ、壁の位置とflip・収縮を決定する。Hodge線束の偏極と保型形式の因子関係が、安定性の変化と双有理幾何を接続する。

## 背景と問題設定

<p>Weierstrass表示の係数を $f_0\in H^0(\mathbb P^1,\mathcal O(4))$、$f_1\in H^0(\mathbb P^1,\mathcal O(6))$ とし、判別式因子を $D=\operatorname{div}(f_0^3+f_1^2)$ とする。著者らは境界係数 $(1-t)/12$ とquasimap重み $t/12$ を持つ対数quasimapを使う。一般の有理楕円曲面の軌跡の閉包を正規化した空間が $\mathcal M_t$ である。</p>

<p>球商 $X_o$ は8次元であり、保型 $\mathbb Q$-線束を $\mathcal L$、特別なHeegner因子を $\Delta(6),\Delta(9)$ と書く。本論文が扱う因子は次である。</p>

<div>
$$
A_t=\mathcal L+\frac{t}{2}\Delta(6)+\frac{t}{3}\Delta(9).
$$
</div>

<p>Conjecture 1.1は $\Delta(6)$ の係数が $t/6$ の別の方向に関する予想であり、Introductionはその予想自体は未解決と明記する。二つの係数を混同してはならない。</p>

## 主結果

### 主定理1：モジュライと切断環の同一視（Theorem 1.2）

<p>二重次数付き環 $R(X_o;A_0,A_1)$ は有限生成であり、すべての有理数 $t\in[0,1]$ について次が成り立つ。</p>

<div>
$$
\mathcal M_t\cong\operatorname{Proj}R(X_o,A_t).
$$
</div>

<p>$t=0$ はBaily–Borelコンパクト化、$t=1$ はMirandaのコンパクト化である。$0\lt t\lt1/7$ のモデルはLooijengaのsemi-toroidal modificationになる。有理数 $t\ge1$ では切断環が $R(X_o,\mathcal L+\frac16\Delta(6)+\frac13\Delta(9))$ と同型になり、豊富モデルはMirandaの空間で一定になる。</p>

### 主定理2：壁と双有理変換（Theorem 1.3）

<p>正のchamberは $(0,1/7)$、$(1/7,1/4)$、$(1/4,1/3)$、$(1/3,1)$ であり、同じchamberではgood moduli spaceは変わらない。最初にsemi-toroidal modificationが現れ、$I_7$ に対応するflip、$I'_8,I''_8$ に対応する二つのflipを経て、$\Delta(6)$ の狭義変換に対応する因子が収縮する。最後には $\Delta(9)$ の狭義変換がMirandaの空間へ収縮する。</p>

<p>壁 $1/3$ の後の一方の射はgood moduli spaceでは同型だが、スタック構造は異なる。この点は、粗い空間の変化だけでは安定性の変化をすべて捉えられないことを示す。</p>

### 主定理3：Hodge偏極の変化（Theorem 1.4）

<p>各 $\mathcal M_t$ 上の豊富なHodge線束は、$A_t$ の狭義変換 $\widetilde A_t$ と $\mathbb Q$-線形同値である。</p>

<div>
$$
\Lambda_{\mathrm{Hodge},t}\sim_{\mathbb Q}\widetilde A_t.
$$
</div>

<p>端点ではそれぞれ保型偏極とGIT偏極に一致する。これはモジュライとして作った空間を、因子の豊富モデルとして同定する中心的な入力である。</p>

### 主定理4：保型形式から得る因子関係（Theorem 1.5）

<p>重さ108の有理型保型形式をBorcherds積の制限として構成し、Allcockの保型形式の制限と合わせて二つの独立な関係を得る。</p>

<div>
$$
2\Delta(6)+2\Delta(9)+3\Delta(15)+\Delta(18)\sim_{\mathbb Q}132\mathcal L,
$$
$$
54\Delta(6)+30\Delta(9)-3\Delta(15)+3\Delta(18)\sim_{\mathbb Q}108\mathcal L.
$$
</div>

<p>Corollary 1.6では、Baily–Borelコンパクト化の有理類群は $[\mathcal L],[\Delta(6)],[\Delta(9)]$ で生成される3次元空間だが、有理Picard群は $[\mathcal L]$ だけで生成され、$\mathbb Q$-factorialでも $\mathbb Q$-Gorensteinでもないとされる。一方、semi-toroidal空間は $\mathbb Q$-factorialであり、Mirandaの空間は $\mathbb Q$-factorialかつkltでPicard数1である。</p>

## 証明の見取り図

quasimapの一般理論により、Heckman–Looijengaのモジュライ空間から各中間モデルへの射を構成する。その境界層を追跡して壁越えを調べ、具体的な族でHodge線束の係数を計算する。並行して、Borcherds積とcuspの幾何から因子類を制御する。Hodge偏極の豊富性を介してこの二つの記述を一致させることが、Introductionに示された証明の流れである。

## 原論文との対応

- **Abstractページ:** [2610.10777](https://arxiv.org/abs/2610.10777)
- **PDF:** [2610.10777v1](https://arxiv.org/pdf/2610.10777v1)
- **Introduction:** Section 1, pp. 1–6（主結果と構成説明はpp. 3–5）
- **主要結果:** Theorems 1.2–1.5, Corollary 1.6; Conjecture 1.1は未解決の別方向
- **確認バージョン:** 2610.10777v1
- **確認ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
