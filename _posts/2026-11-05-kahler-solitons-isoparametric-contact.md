---
layout: paper
title: Kähler Solitons, Contact Structures, and Isoparametric Functions
title_ja: Kählerソリトンの等径関数と変形Sasaki構造
authors: Hung Tran
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: Many known examples of simply-connected gradient K\"{a}hler-Ricci solitons in real dimension four are toric, and the symmetry is intrinsically related to the potential function $f$ and the scalar curvature $\SS$. In this article, we consider the case that $f$ and $\SS$ are functionally dependent and deduce a complete classification, while the independence case is addressed elsewhere. The main theorem recovers all known examples of cohomogeneity one symmetry. We also discover a connection to the theory of isoparametric functions and contact geometry. Indeed, a key ingredient is a new characterization for a deformed Sasakian structure generalizing a classical result.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- curvature
- symplectic-contact-geometry
arxiv_id: 2310.11328v4
arxiv_url: https://arxiv.org/abs/2310.11328
arxiv_submitted: '2023-10-17'
arxiv_updated: '2026-11-01'
summary: 実四次元のKähler–Ricciソリトンで、ポテンシャルとスカラー曲率が関数的に従属する場合を分類する。等位面の変形Sasaki構造を通じて計量を常微分方程式へ還元し、収縮型・定常型・拡大型を共通に扱う。
abstract_en: ''
summary_en: This work analyzes a symmetry-producing condition for four-dimensional Kähler Ricci solitons. The condition links the scalar curvature to the soliton potential through functional dependence. Contact geometry on regular level sets supplies an explicit metric description and distinguishes several possible ends. Higher-dimensional statements are made under a stronger level-set hypothesis rather than as an unrestricted extension of the four-dimensional classification.
abstract_ja: 実四次元の勾配Kähler–Ricciソリトンについて、ポテンシャル関数とスカラー曲率が関数的に従属する場合を分類する。関数的に独立な場合は別論文で扱う。既知の余等質性1の例を回収する分類を得るとともに、等径関数と接触幾何の関係を示す。主要な道具として、古典的な特徴づけを一般化した変形Sasaki構造の判定を与える。
abstract_source_url: https://arxiv.org/abs/2310.11328
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2310.11328v4](https://arxiv.org/abs/2310.11328)
- **著者:** Hung Tran
- **初回投稿日:** 2023-10-17
- **最終更新日:** 2026-11-01
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

RicciソリトンはRicci流の自己相似解であり、その分類は流の特異点や長時間挙動を理解する基礎となる。本論文はKählerという複素幾何の構造に加え、ポテンシャル関数とスカラー曲率の関係に着目する。

実四次元で両者が関数的に従属する場合、完備ソリトンは積型か、変形Sasaki空間形を等位面とする型に限られる。収縮型だけを対象にせず、ソリトン定数のすべての符号に共通する枠組みである。

その背後には、等位面の接触幾何を用いて計量を明示する方法がある。高次元では同じ関数的従属性だけで分類するのではなく、各正則等位面が変形接触構造を持つという仮定を置く。端の距離と崩壊の仕方も調べ、拡大型には臨界点を持たない場合が現れる。

## 背景と問題設定

勾配Ricciソリトンは

$$
\operatorname{Ric}+\operatorname{Hess}f=\lambda g
$$

を満たす。$g$が複素構造$J$についてKählerなら勾配Kähler–Ricciソリトンとなる。$f$とスカラー曲率$S$の関数的従属性とは、非零となる勾配が互いにスカラー倍になるという条件である。ソリトンでは、これは$f$の各連結等位面で$\Delta f$と$|\nabla f|$が一定という等径性と結び付く。

## 主結果

### 実四次元の分類（Theorem A）

完備・連結・非平坦な実四次元Kähler勾配Ricciソリトンで、$f$が非定数、$f$と$S$が関数的に従属するとする。このとき、定曲率曲面と実二次元Kählerソリトンの積の商であるか、$f$の等距離等位面で葉層化され各正則等位面が三次元変形Sasaki空間形の離散群商となる。

### 対称性と部分的逆（Corollaries B, C）

さらに単連結・既約・非コンパクトなら余等質性1で、等長変換群の次元は4となる。特異軌道がただ一つ存在して単連結である場合と、$\lambda<0$で$f$に臨界点がなく$M\simeq\mathbb R\times P$となる場合に分かれる。後者の$P$は$\widetilde{\operatorname{SL}}\_2(\mathbb R)$または$\operatorname{Nil}\_3$の標準Sasaki構造の変形である。$\lambda\geq0$では前者に限られる。

逆方向には、完備・連結・既約な実四次元の余等質性1ソリトンで$f$が非定数、さらに$\lambda\neq0$または等長変換群がコンパクトなら、$f$と$S$は関数的に従属する。

### 等位面から計量と端を復元する（Theorem D）

完備・連結なKählerソリトンで$n=\dim\_{\mathbb C}M-1>0$とし、非定数$f$の各正則等位面に誘導される構造が変形接触構造であると仮定する。横断計量$g^\perp$がEinstein、$\operatorname{Ric}^\perp=kg^\perp$となるSasakiモデルを用いて、正則点の稠密開集合上で

$$
\phi^\ast g=\frac{ds^2}{\alpha(s)}+\alpha(s)\eta\otimes\eta+(2s+A)g^\perp,
\qquad f\circ\phi=Bs+C
$$

と書ける。$B\neq0$で、係数は

$$
\lambda(2s+A)=k-\frac{d\alpha}{ds}-\frac{2n\alpha}{2s+A}+B\alpha
$$

を満たす。下端$s\_-$では$\alpha\to0$となり、一点へ崩壊するnut、Kähler–Einstein多様体へ崩壊するbolt、無限遠のcuspの三種類に分かれる。nutでは$2s\_-+A=0$、$k>0$でモデルはSasaki球面となる。boltでは$2s\_-+A>0$、$\alpha'(s\_-)>0$で、円束の底が臨界等位面となる。cuspでは

$$
\lambda<0,\quad k=\lambda(2s\_-+A)\leq0,\quad\alpha'(s\_-)=0,\quad B<0
$$

であり、$I=(s\_-,\infty)$、$M\simeq\mathbb R\times P$、$f$は上に有界で臨界点を持たない。上端は無限遠か、$\alpha(s\_+)=0>\alpha'(s\_+)$のboltである。後者では$\lambda>0$、$k>0$となる。

### 接触構造の判定（Theorems E, F）

概接触計量構造に対する

$$
(\nabla\_X\Phi)(Y)=b\thinspace g(X,Y)\zeta-b\eta(Y)X
$$

という恒等式は、定数$b\neq0$なら変形Sasaki構造を特徴づける。$b=0$なら$\zeta$は平行で、局所的に区間とKähler多様体の積となる。完備な場合は普遍被覆が直線と単連結Kähler多様体の積になる。

Kähler多様体内の実超曲面について、形作用素が定数$\alpha$を用いて$L=\alpha\operatorname{Id}+\beta\zeta\otimes\eta$と書けることも対応する判定となる。$\alpha\neq0$では変形Sasaki構造、$\alpha=0$では$\nabla\Phi=0$で局所積構造を得る。

## 証明の見取り図

まず葉層構造とO’Neillの手法を使い、構造テンソル$\Phi$の共変微分が変形でどう変わるかを追う。接触構造の判定を得た後、ソリトンの等位面から上の計量表示を導き、滑らかな完備化と端の解析を行う。最後に実四次元の等径性を組み合わせて分類と対称性の系を得る。一般の実四次元ソリトン全体が本論文だけで分類されたわけではなく、関数的に独立な場合は別の研究に委ねられる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2310.11328)
- **Introduction:** [PDF](https://arxiv.org/pdf/2310.11328v4) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems A, D, E, F; Corollaries B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2310.11328v4
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
