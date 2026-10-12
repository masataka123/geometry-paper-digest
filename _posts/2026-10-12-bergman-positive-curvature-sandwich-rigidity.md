---
layout: paper
title: Biholomorphic rigidity and symmetry breaking for domains with Bergman metric of constant positive holomorphic sectional curvature
title_ja: 正の定正則断面曲率を持つBergman領域の剛性と対称性の破れ
authors: Gordon Heier, Ravi Mudaliar, Haotian Zuo
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
- math.DG
arxiv_abstract: Based on earlier work by Wiegerinck and Huang-Li, Hayashida-Kamimoto constructed unbounded non-smooth Reinhardt domains in \({\mathbb C}^n\), \(n\geq 3\), whose Bergman spaces are finite-dimensional and whose Bergman metrics have constant positive holomorphic sectional curvature \(2\). In this note, we prove a Sandwich Principle for the Hayashida-Kamimoto domains that allows us to construct, inside every prescribed sandwich, uncountably many pairwise biholomorphically inequivalent smooth non-Reinhardt domains whose Bergman metrics also have constant positive holomorphic sectional curvature \(2\). We also classify biholomorphisms between domains sandwiched by the domains of Hayashida-Kamimoto with the help of an affine rigidity theorem in the spirit of Cartan rigidity, which should be of independent interest. For explicit angular perturbation families, we determine the full automorphism group and obtain, in particular, an abundance of examples with trivial automorphism group.
topic: several-complex-variables
tags:
- curvature
arxiv_id: 2610.13831v1
arxiv_url: https://arxiv.org/abs/2610.13831
arxiv_submitted: '2026-10-09'
arxiv_updated: '2026-10-09'
summary: Bergman空間が一定次数以下の多項式全体となる領域の双正則写像がアフィン写像に限られることを示す。さらに既知の非有界Reinhardt領域の間に挟まれた領域を用い、Bergman計量の正則断面曲率が2でありながら自己同型群が自明な滑らかな非Reinhardt領域を非可算個構成する。
abstract_en: ''
summary_en: A constant-curvature Bergman metric need not determine the domain’s biholomorphic type or force symmetries. The authors first prove an affine rigidity theorem from the polynomial structure of a finite-dimensional Bergman space. They then use nested reference domains to preserve the metric’s positive curvature while perturbing the boundary. The resulting smooth domains can have trivial automorphism groups and still vary through uncountably many inequivalent examples.
abstract_ja: 有限次元Bergman空間の構造から領域の双正則写像を制御し、その剛性を正の定曲率を持つ非有界領域へ応用する。参照領域の間に挟まれることはBergman空間を保ち、特定のパラメーター範囲では曲率2の計量を与える。一方、領域の角度方向の摂動は対称性を壊せるため、同じ局所曲率を持っても双正則型は一つに決まらない。三次元以上では、任意の指定した挟み込みの中に、自己同型群が自明で互いに双正則でない滑らかな例を非可算個得る。
abstract_source_url: https://arxiv.org/abs/2610.13831
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.13831v1](https://arxiv.org/abs/2610.13831)
- **著者:** Gordon Heier, Ravi Mudaliar, Haotian Zuo
- **初回投稿日:** 2026-10-09
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.CV（主分類）; math.AG, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bergman計量は領域上の二乗可積分正則関数から作られる内在的なKähler計量である。有界領域では正の定正則断面曲率は起こらないため、本論文は有限次元Bergman空間を持つ非有界領域を舞台にする。

既知の構成は正則断面曲率2の例を与えていたが、領域どうしの双正則同値や、どれだけの対称性が必然的に残るかは別問題である。本論文はまずBergman空間の構造から写像のアフィン性を証明し、それを具体的な領域の分類へ使う。

一方で、二つの参照領域の間に挟まれるという条件を保って境界を変形すると、曲率は保ちながら対称性を壊せる。これにより、正の定曲率という局所的に強い条件と、自己同型群が自明であるという大域的性質が両立する多数の例を得る。

## 背景と問題設定

<p>$A^2(D)$ を領域 $D\subset\mathbb C^n$ の二乗可積分正則関数の空間とする。参照するHayashida–Kamimoto型の領域は、$a,t>0$ に対し</p>

<div>
$$
D_{a,t}=\left\{z\in\mathbb C^n:
\bigl||z_k|^2-|z_n|^2\bigr|<\frac{t}{(1+|z_n|^2)^a},\quad k=1,\ldots,n-1\right\}
$$
</div>

<p>である。$D_{a,t_1}\subseteq D\subseteq D_{a,t_2}$ となる領域を $a$-sandwichableと呼ぶ。中間領域にReinhardt対称性や境界の滑らかさは仮定しない。</p>

## 主結果

### 主定理1：有限次元Bergman空間によるアフィン剛性（Theorem 1.1）

<p>$n\ge2$、$q\ge1$ とし、二つの領域で</p>

<div>
$$
A^2(\Omega_1)=A^2(\Omega_2)=\mathcal P_{\le q},\qquad
\mathcal P_{\le q}=\operatorname{Span}\{z^\alpha:|\alpha|\le q\}
$$
</div>

<p>が成り立つなら、すべての双正則写像は $F(z)=Az+b$、$A\in\operatorname{GL}(n,\mathbb C)$、$b\in\mathbb C^n$ の形である。有界性、円対称性、特別な固定点を要求しない。定曲率の構成に必要なのは $q=1$ だが、この剛性定理はより高い次数にも適用される。</p>

### 主定理2：Sandwich Principle（Theorem 1.2）

<p>$a>0$、$0<t_1\le t_2$、$n\ge2$ のとき、上記の中間領域のBergman空間は両参照領域のものと同型になる。さらに</p>

<div>
$$
\frac{2}{n-1}<a\le\frac{3}{n-1}
$$
</div>

<p>なら、Bergman写像は $D$ をFubini–Study計量を持つ $\mathbb P^n$ の開部分集合へ正則等長に埋め込む。従ってBergman計量の正則断面曲率は定数2である。関数空間が保たれることを、任意の二領域の双正則同値と混同してはならない。</p>

### 主定理3：挟まれた領域の双正則写像（Theorem 1.3）

<p>$n\ge3$、$a_1,a_2>2/(n-1)$ とする。$a_j$-sandwichableな $\Omega_j$ の間に双正則写像があれば $a_1=a_2$ であり、写像は</p>

<div>
$$
F(z)=\rho DPz,\qquad \rho>0
$$
</div>

<p>の形に限られる。$D$ は対角ユニタリ行列、$P$ は置換行列である。自己同型なら $\rho=1$ となる。参照領域の族については、Introductionで $D_{a_1,t_1}\cong D_{a_2,t_2}$ と $(a_1,t_1)=(a_2,t_2)$ の同値も述べられており、二つのパラメーターは双正則不変量となる。</p>

### 主定理4：対称性を持たない多数の例（Theorem 1.4）

<p>$n\ge3$、$2/(n-1)<a\le3/(n-1)$ とする。任意の $0<t_1<t_2$ に対し、$D_{a,t_1}\subseteq D\subseteq D_{a,t_2}$ を満たす滑らかな非Reinhardt領域で、Bergman計量の正則断面曲率が2、自己同型群が自明なものが、双正則同値を除いて非可算個存在する。</p>

## 証明の見取り図

アフィン剛性はBergman空間に内在する射影幾何から導かれる。この段階は曲率から独立している。続いて線形写像が参照領域の幾何を保つ条件を解析し、許される写像を拡大・対角ユニタリ変換・座標置換へ絞る。

Sandwich PrincipleでBergman空間を保つ範囲を確保した後、角度方向の滑らかな摂動を構成する。摂動データから自己同型群を計算し、非自明な対称性が残らないようにする。Introductionは、これらを剛性、摂動、自己同型群、非可算族の順で扱う構成を説明している。

## 原論文との対応

- **Abstractページ:** [Biholomorphic rigidity and symmetry breaking for domains with Bergman metric of constant positive holomorphic sectional curvature](https://arxiv.org/abs/2610.13831)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.13831v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4; Introduction中のTheorem 8.2への言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.13831v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
