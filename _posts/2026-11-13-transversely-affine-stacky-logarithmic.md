---
layout: paper
title: Stacky geometry and logarithmic topology of transversely affine foliations
title_ja: 横断アフィン葉層の線形モノドロミーと対数境界
authors: Pedro Barbassa, Gabriel Santos Barbosa, Maurício Corrêa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: We study the linear monodromy of codimension-one transversely affine foliations through multiplicative quotient stacks and logarithmic boundary topology. When the transverse affine structure admits a global presentation on $U$, a choice of multiplicative developing coordinate induces a morphism to $[\mathbb{C}^*/Γ]$, where $Γ\subset\mathbb{C}^*$ is the image of the linear monodromy. We prove that for infinite $Γ$ every strict semi-equivariant holomorphic self-map of $\mathbb{C}^*$ is a monomial, and classify the nonconstant strict semi-equivariant rational self-maps of $\mathbb{P}^1$ for arbitrary $Γ$. For a logarithmic connection along a simple normal crossings divisor, we describe the meridional characters and angular foliations on the boundary fibres of the Kato--Nakayama space, including the topology and closures of their leaves. We also describe the extension of the linear monodromy local system to this space and the effect of local Kummer base change on finite meridional
  monodromy.
topic: algebraic-geometry
tags:
- foliations
- fundamental-groups
arxiv_id: 2605.27669v2
arxiv_url: https://arxiv.org/abs/2605.27669
arxiv_submitted: '2026-05-26'
arxiv_updated: '2026-11-09'
summary: 余次元1の横断アフィン葉層について、線形モノドロミーを乗法的商スタックと対数境界から記述する。固定した表示の厳密な半同変写像を分類し、単純正規交差因子に沿う留数から境界トーラス上の葉と局所系を説明する。
abstract_en: We study the linear monodromy of codimension-one transversely affine foliations through multiplicative quotient stacks and logarithmic boundary topology. When the transverse affine structure admits a global presentation on $U$, a choice of multiplicative developing coordinate induces a morphism to $[\mathbb{C}^*/Γ]$, where $Γ\subset\mathbb{C}^*$ is the image of the linear monodromy. We prove that for infinite $Γ$ every strict semi-equivariant holomorphic self-map of $\mathbb{C}^*$ is a monomial, and classify the nonconstant strict semi-equivariant rational self-maps of $\mathbb{P}^1$ for arbitrary $Γ$. For a logarithmic connection along a simple normal crossings divisor, we describe the meridional characters and angular foliations on the boundary fibres of the Kato--Nakayama space, including the topology and closures of their leaves. We also describe the extension of the linear monodromy local system to this space and the effect of local Kummer base change on finite meridional
  monodromy.
summary_en: ''
abstract_ja: 横断アフィン構造の線形部分と平行移動部分を分け、前者を商スタックとKato–Nakayama空間で調べる。モノドロミー像が無限なら厳密な半同変正則自己写像は単項式となり、有限巡回群の場合の有理写像も明示できる。対数接続の留数は境界トーラス上の指標と角方向の葉を定め、有限な子午線モノドロミーは局所Kummer基底変換によって自明化される。
abstract_source_url: https://arxiv.org/abs/2605.27669
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.27669v2](https://arxiv.org/abs/2605.27669)
- **著者:** Pedro Barbassa, Gabriel Santos Barbosa, Maurício Corrêa
- **初回投稿日:** 2026-05-26
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

横断アフィン葉層にはアフィン群へのモノドロミー表現が付随するが、その線形部分だけでは平行移動部分まで復元できない。本論文はこの区別を出発点に、線形モノドロミーを乗法的な商スタックで記述し、対数極を持つ境界付近の位相と結び付ける。

固定した乗法的表示に対する厳密な半同変写像には強い制限がある。モノドロミー像が無限の場合には正則写像は単項式となる。一方、商が楕円曲線になる例では、商そのものの自己写像にはこの表示で厳密に表せないものがある。したがって、表示上の写像の分類と商スタックの全射の分類を混同しないことが重要である。

境界側では、単純正規交差因子の留数が実トーラス上の指標と角方向の葉層を決める。Kato–Nakayama空間への局所系の延長と、有限モノドロミーを消す局所基底変換を扱うことで、線形接続が保持する位相的情報を具体化する。

## 背景と問題設定

連結開集合 $U$ で横断アフィン構造の大域表示 $(\omega,\eta)$ があり、$d\omega=\omega\wedge\eta$、$d\eta=0$ とする。普遍被覆上で $d\Phi=p^\ast \eta$ を選ぶと
$$
z=e^\Phi,\qquad \frac{dz}{z}=p^\ast \eta,\qquad df=e^\Phi p^\ast \omega
$$
となる。$f$ はアフィン展開写像、$z$ は線形接続の乗法的座標であり、後者は一般に葉層の第一積分ではない。

線形表現を $\rho:\pi\_1(U)\to\mathbb C^\ast $、像を $\Gamma$ とする。$\Gamma$ は $\mathbb C^\ast $ 内で稠密であっても離散群として扱い、選んだ座標が $U\to[\mathbb C^\ast /\Gamma]$ を定める。この構成はアフィン表現の平行移動部分を記録するtorsorとは異なる。

## 主結果

### 厳密な半同変写像の分類（Proposition 4.9, Theorem 4.23）

$\psi(\gamma z)=\sigma(\gamma)\psi(z)$ を満たす正則自己写像 $\psi:\mathbb C^\ast \to\mathbb C^\ast $ を考える。$\Gamma$ が無限なら
$$
\psi(z)=az^n,\qquad a\in\mathbb C^\ast ,\quad n\in\mathbb Z,\quad \sigma(\gamma)=\gamma^n
$$
に限られる。$\mathbb P^1$ の非定数有理自己写像についても、無限群の場合は $n\neq0$ の単項式である。$\Gamma=\mu\_N$ の場合は
$$
R(z)=z^m\frac{P(z^N)}{Q(z^N)},\qquad \sigma(\zeta)=\zeta^m
$$
と書ける。$P,Q\in\mathbb C[t]$ は互いに素で、得られる写像が非定数であることを要求する。

この定理は固定した表示での厳密な半同変写像についての分類である。$\Gamma=q^{\mathbb Z}$、$|q|\neq1$ の商楕円曲線では、複素乗法に由来する自己準同型が乗法的アトラス上の整数冪で表せない場合がある。

### 対数境界の葉（Theorem 6.9）

$D$ を単純正規交差因子とし、$\eta$ が閉じた対数1形式として延長するとする。$D\_I^\circ$ 上の点で留数を $\alpha\_i$ と書くと、Kato–Nakayama境界のファイバーは実トーラス $(S^1)^{|I|}$ であり、子午線の指標は
$$
(m\_i)\longmapsto\exp\left(2\pi i\sum\_{i\in I}m\_i\alpha\_i\right)
$$
となる。角座標で葉の接空間は
$$
V=\ker(\operatorname{Re}\alpha)\cap\ker(\operatorname{Im}\alpha)
\subset\mathbb R^{|I|}
$$
である。Introductionでは概略として次のように述べられている：葉はユークリッド空間と実トーラスの積のはめ込みとして記述され、その閉包は $V$ が生成する有理部分空間から決まる。これは境界ファイバー上の葉であり、補集合上の実分布とは区別される。

### 局所系の延長と有限モノドロミー（Theorems 7.3, 7.8）

$U=X\setminus D\hookrightarrow X^{\log}$ がホモトピー同値となることにより、$\rho$ の階数1局所系は $X^{\log}$ へ延長し、境界ファイバー上では上記の指標を持つ。展開座標 $z$ 自体が境界を越えて延長することは要求しない。子午線指標の像が有限なら、適切な局所Kummer基底変換によって自明化できる。変換前の角方向の情報が無かったことになるわけではない。

## 議論の見取り図

Introductionは、まずアフィン展開写像から線形座標を分離し、群作用に対する厳密な半同変条件を調べる流れを示す。境界では留数を指標と一定係数分布へ変換し、正規交差境界の実有向ブローアップとしての位相を使って局所系を延長する。写像分類と境界の記述が同じ線形モノドロミーを異なる面から記録する構成である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2605.27669)
- **Introduction:** [PDF](https://arxiv.org/pdf/2605.27669v2) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Proposition 4.9, Theorems 4.23, 6.9, 7.3, 7.8；Corollary 7.12（Introductionで説明）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2605.27669v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
