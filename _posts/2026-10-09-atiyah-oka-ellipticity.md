---
layout: paper
title: Atiyah classes and ellipticity of Oka manifolds
title_ja: Atiyah類とOka多様体の楕円性
authors: Yuta Kusakabe, Shin-ichi Matsumura
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
- math.DG
arxiv_abstract: 'We prove that every weakly pseudoconvex Oka manifold admitting a positive line bundle is elliptic in the sense of Gromov, thereby proving Gromov''s ellipticity conjecture. The proof establishes a cohomological construction of local sprays. Given a bundle morphism $\varphi\colon E\to T_X$, we introduce quadratic $\varphi$-vector fields on $E$ whose flows yield local sprays with fibre derivative $\varphi$. Their existence is characterized by the vanishing of the symmetrized $\varphi$-Atiyah class of $E$. This gives a local dominating spray on every weakly pseudoconvex manifold admitting a positive line bundle, without any Oka assumption. The positivity hypothesis is essential even for local existence: blow-ups at a single point of complex tori of algebraic dimension zero, and Kummer surfaces of algebraic dimension zero, admit no local dominating spray. The torus examples give compact K\"ahler Oka manifolds that are not elliptic and show that ellipticity is not preserved under
  blowing up, and that it is neither open nor closed in holomorphic families of compact Oka manifolds. Combined with the work of Xie and Zhao, the Kummer examples yield Oka K3 surfaces that are not elliptic. Under the additional Oka assumption, we globalize the local dominating sprays constructed above. The proof combines Oka approximation with a gluing argument based on weighted $L^2$ estimates for the $\bar\partial$-equation.'
topic: several-complex-variables
tags:
- oka-theory
- positivity
- vector-bundles-sheaves
- l2-methods
arxiv_id: 2610.12175v1
arxiv_url: https://arxiv.org/abs/2610.12175
arxiv_submitted: '2026-10-08'
arxiv_updated: '2026-10-08'
summary: 正の線束を持つ弱擬凸Oka多様体がGromovの意味で楕円的であることを示す。局所sprayの構成をAtiyah類の消滅へ帰着し、Oka近似と重み付きL²法で大域化する一方、正値性を外すとコンパクトKähler Oka多様体でも局所支配sprayが存在しない例を与える。
abstract_en: ''
summary_en: The converse from Oka flexibility to ellipticity requires geometric hypotheses. Kusakabe and Matsumura separate the problem into constructing a spray near a bundle’s zero section and extending it over the entire bundle. An Atiyah-class obstruction controls a particular quadratic vector-field construction, while Oka approximation and weighted estimates handle globalization. Compact Kähler examples without even local dominating sprays explain why positivity cannot simply be dropped.
abstract_ja: Oka性から楕円性へ進むために、局所的な支配sprayの存在とその大域化を分けて扱う論文である。束の写像に付随する対称化Atiyah類の消滅を、局所sprayを作る二次ベクトル場の存在と同値にし、正の線束を持つ弱擬凸多様体で局所構成を行う。Oka性を加えると、近似と重み付きL²評価による貼り合わせで大域sprayを得る。代数次元0のトーラスの一点blow-upやKummer曲面には局所支配sprayがなく、正値性を省略した同値は成立しない。
abstract_source_url: https://arxiv.org/abs/2610.12175
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** Atiyah classes and ellipticity of Oka manifolds
- **著者:** Yuta Kusakabe, Shin-ichi Matsumura
- **arXiv:** [2610.12175v1](https://arxiv.org/abs/2610.12175)
- **初回投稿日 / 更新日:** 2026-10-08 / 2026-10-08
- **主分類:** math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)。著作権は原著者等の権利者に帰属する。

## 要約

Oka多様体はStein多様体からの写像を正則写像へ変形できる柔軟性を持つ。一方、Gromovの楕円性は、接方向をすべて動かせる大域的なsprayを一つのベクトル束上に持つという、具体的な幾何構造である。楕円性からOka性は従うが、逆向きには追加の条件が必要になる。

本論文は、正の線束を持つ弱擬凸Oka多様体について逆向きを証明する。まず局所sprayを作る問題をAtiyah類の消滅で扱い、その後にOka性を使って大域化する。この分離により、局所存在に必要な正値性と、大域化に使う柔軟性の役割が明確になる。

同時に、正値性を取り除くと、コンパクトKähler Oka多様体でも楕円性が破れる例を与える。したがって結論は「Okaなら常に楕円的」ではなく、正の線束という仮定を伴う同値を扱うものである。

## 背景と問題設定

<p>ベクトル束 $p:E\to X$ 上のsprayは、零切断上で $s(0_x)=x$ となる正則写像 $s:E\to X$ である。さらに</p>

<div>
$$
(ds)_{0_x}(E_x)=T_{X,x}\qquad(x\in X)
$$
</div>

<p>を満たすとき支配的と呼び、そのような大域sprayを持つ $X$ を楕円的という。零切断の近傍 $U\subset E$ 上だけで定義されたものが局所sprayである。</p>

Introductionでは、Steinの場合や射影的な場合の先行結果を挙げたうえで、弱擬凸多様体まで扱う。非コンパクトな零切断を許すため、射影的な場合に用いられた1-convex領域の方法をそのまま適用することはできない。

## 主結果

### 主定理1：正値性を伴うOka性から楕円性へ（Theorem 1.1）

正の線束を持つ弱擬凸Oka多様体は、Gromovの意味で楕円的である。Introductionはこれを、正の線束を持つ正則凸多様体についてのGromovの予想を含み、既知のStein・射影的な場合を統一する結果として位置付ける。

### 主定理2：局所sprayすら持たない例（Theorem 1.2）

<p>代数次元0の複素トーラス $T$ の一点blow-up $\operatorname{Bl}_{t_0}(T)$ と、代数次元0のKummer曲面は局所支配sprayを持たない。前者は既知の結果によりOkaであるため、コンパクトKähler Oka多様体でも楕円的とは限らない。</p>

Introductionは、この例から楕円性がblow-upで保存されず、コンパクトOka多様体の正則族で開条件でも閉条件でもないと述べる。またXie–Zhaoの研究と合わせると、楕円的でないOka K3曲面が得られるとする。この後者のOka性は、ここで独立に証明する主張とは区別される。

### 主定理3：対称化Atiyah類による判定（Theorem 1.3）

<p>正則束の写像 $\varphi:E\to T_X$ に対し、$E$ 上の二次 $\varphi$-ベクトル場が存在することと、対称化 $\varphi$-Atiyah類の消滅は同値である。</p>

<div>
$$
E\text{ 上に二次 }\varphi\text{-ベクトル場が存在}
\quad\Longleftrightarrow\quad\alpha_\varphi(E)=0.
$$
</div>

<p>このベクトル場の流れが、ファイバー微分 $\varphi$ を持つ局所sprayを与える。$\varphi$ が全射なら支配的になる。この定理は二次ベクトル場を構成するための障害を特徴付け、指定された写像を局所sprayへ積分する十分条件を与える。任意の方法で作られるすべての局所sprayの存在と、同じ消滅条件が必要十分だとまでは述べていない。</p>

### 主定理4：局所sprayの大域化（Theorem 1.4）

<p>$X$ は弱擬凸Oka多様体、$B\to X$ は正の線束とし、ある整数 $k\ge0$ に対して $K_X^{-1}\otimes B^{\otimes k}$ が半正曲率の滑らかなHermitian計量を持つと仮定する。</p>

<p>ある $N\ge1$ に対し $E=(B^\vee)^{\oplus N}$ が局所支配sprayを持つなら、$E$ は零切断に沿ってそれとorder 2まで一致する大域支配sprayを持つ。論文の規約で「order 2まで一致」とは、局所座標で次数2未満の偏微分が一致することを指し、値と一次微分を保つ。</p>

## 証明の見取り図

Atiyah類に基づく局所構成はOka性を必要としない。正の線束を持つ弱擬凸多様体上で局所支配sprayを作る段階と、Oka性による大域化を分ける。

大域化では負のベクトル束の全空間からOka多様体への写像について、零切断に沿うjetを保つ拡張定理を用いる。Stein源のOka原理の局所から大域への方法に沿いつつ、重み付きL²評価による貼り合わせで所定のjetを保つ。Introductionは一般の弱擬凸源からの写像への拡張を今後の課題として述べており、本論文の達成範囲とは区別する。

## 原論文との対応

- **Abstractページ:** [2610.12175](https://arxiv.org/abs/2610.12175)
- **PDF:** [2610.12175v1](https://arxiv.org/pdf/2610.12175v1)
- **Introduction:** Section 1, pp. 2–4（Abstractはp. 1）
- **主要結果:** Theorems 1.1–1.4
- **確認バージョン:** 2610.12175v1
- **確認ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
