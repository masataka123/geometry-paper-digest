---
layout: paper
title: Recent developments on Oka manifolds
title_ja: Oka多様体の近年の進展と非Okaファイバーへの退化
authors: Franc Forstneric
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: In this paper we present the main developments in Oka theory since the publication of my book Stein Manifolds and Holomorphic Mappings (The Homotopy Principle in Complex Analysis)}, Second Edition, Springer, 2017. We also give several new results, examples and constructions of Oka domains in Euclidean and projective spaces. Furthermore, we show that for $n>1$ the fibre $\mathbb C^n$ in a Stein family can degenerate to a non-Oka fibre, thereby answering a question of Takeo Ohsawa. Several open problems are discussed.
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
arxiv_id: 2006.07888v7
arxiv_url: https://arxiv.org/abs/2006.07888v7
arxiv_submitted: '2020-06-14'
arxiv_updated: '2023-02-20'
summary: 2017年以後のOka理論を、凸近似による特徴づけ、局所化、補集合の構成などを軸に概説する。新しいOka領域の例に加え、一般ファイバーが複素ユークリッド空間でも特別ファイバーがOkaでないStein族を構成する。
abstract_en: ''
summary_en: Forstneric surveys developments in Oka theory after 2017 while adding new constructions and examples. The introduction connects the convex approximation axiom with approximation, interpolation and homotopy principles for maps from Stein spaces. It distinguishes earlier characterization and complement theorems from the paper’s additional results. A degeneration of Euclidean fibres illustrates that flexibility need not persist at a special fibre.
abstract_ja: 2017年の著書以降のOka理論の主な進展を紹介し、ユークリッド空間と射影空間内のOka領域について新しい結果・例・構成を与える。凸近似性によるOka多様体の定義から、楕円的特徴づけ、Zariski局所性、正則凸集合の補集合、代数的Oka理論、近似定理へ展開する。また、n>1の複素ユークリッド空間をファイバーとするStein族が非Okaファイバーへ退化し得ることを示し、Ohsawaの問いに答える。
abstract_source_url: https://arxiv.org/abs/2006.07888v7
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2006.07888v7](https://arxiv.org/abs/2006.07888v7)
- **著者:** Franc Forstneric
- **初回投稿日:** 2020-06-14
- **最終更新日:** 2023-02-20
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka理論は、Stein空間からの連続写像を、近似や補間を保ちながら正則写像へ変形できる対象を扱う。本論文は2017年以後の発展を概説しつつ、新しい領域の構成や退化の例も与える。紹介された定理をすべて本論文の新結果と捉えないことが重要である。

中心にあるのは、単純な凸集合上の近似性から広いホモトピー原理が従うという特徴づけである。Kusakabeの楕円的特徴づけや局所化に関する仕事、正則凸集合の補集合がOkaとなる結果によって、柔軟な複素多様体の例が大きく広がった経緯を説明する。

一方、Oka性は退化で必ず保たれるわけではない。一般ファイバーが$\mathbb C^2$であるStein submersionでも、特別ファイバーを円板と$\mathbb C$の積にできる。この構成は、写像の豊富さと族の幾何の間にある限界を具体化する。

## 背景と問題設定

Definition 1.1では、複素多様体$Y$がOkaであることを凸近似性CAPで定義する。任意の$n$とコンパクト凸集合$K\subset\mathbb C^n$について、$K$の近傍から$Y$への正則写像を、$\mathbb C^n$全体からの正則写像で$K$上一様近似できるという条件である。

Riemann面ではOkaか小林双曲的かという二分法が成り立つが、高次元では柔軟性と剛性の間に多様な現象がある。IntroductionはOka理論を正則写像の存在理論、小林双曲性を障害の理論として位置付ける。

## 主結果

### 基礎となるOka原理（Theorem 1.2）

$Y$がOkaなら、Stein多様体または被約Stein空間$X$からの任意の連続写像$f:X\to Y$は正則写像にホモトピックである。$f$がコンパクト$\mathcal O(X)$-凸集合$K$の近傍と閉複素部分多様体$X'$上で正則なら、$X'$上の値を固定し、$K$で一様近似するホモトピーを選べる。コンパクトHausdorff空間をパラメータとする相対版も成り立つ。

これは著者の既刊書に基づく基本定理の再提示であり、新たに全Oka原理を証明したという主張ではない。帰結として、正則写像空間から連続写像空間への包含

$$
\mathcal O(X,Y)\hookrightarrow\mathcal C(X,Y)
$$

は弱ホモトピー同値となる。

### Oka領域を保つ変形（Theorem 1.3）

$\Omega\subset Y$をOka領域とし、$X,K,X'$は上記の設定とする。$f:X\to Y$が連続、$K$の近傍と$X'$上で正則で、$f(X\setminus K)\subset\Omega$なら、Theorem 1.2の補間・近似に加えて

$$
f\_t(X\setminus K)\subset\Omega\qquad(0\leq t\leq1)
$$

を保ち、正則写像$f\_1$へ変形できる。Introductionは既存の証明から得られる応用上有用な形として述べる。

### 補集合の構成（Introductionによる結果の紹介）

Kusakabeの結果として、$n>1$でコンパクト多項式凸集合$K\subset\mathbb C^n$の補集合$\mathbb C^n\setminus K$がOkaとなることを紹介する。本論文ではさらに、$\mathbb C^n$を射影空間のアフィンチャートと見たとき

$$
\mathbb P^n\setminus K\text{ もOka}
$$

となることをCorollary 5.2として示す。整長Jordan曲線の補集合が$\mathbb C^n$と$\mathbb P^n$でOkaとなる例も述べる。より一般の集合の合併に対する結果には追加条件があるため、Introductionにない精密化は行わない。

### 非Okaファイバーへの退化（Theorem 10.1の概説）

Stein submersion$X\to\mathbb C$で、$\mathbb C^\ast $上ではファイバー$\mathbb C^2$の自明な正則ファイバー束であるが、0上のファイバーが

$$
X\_0\simeq\mathbb D\times\mathbb C
$$

となる例を構成する。特別ファイバーはOkaでなく、Ohsawaの問いへの回答となる。Introductionではこの形で結果が記されており、構成の詳細はSection 10に委ねられる。

## 議論の見取り図

Introductionは、CAPを起点としてOka写像、楕円的条件、局所化へ進み、密度性を持つStein多様体と補集合の構成を結び付ける構成を説明する。後半では代数的写像、Carleman・Arakelian型近似、管状近傍、退化、Campana特殊性との関係を扱う。最後の関係や正則微分関係への拡張には未解決問題が含まれ、一般的な同値定理としては述べられていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2006.07888v7)
- **Introduction:** [PDF](https://arxiv.org/pdf/2006.07888v7) — Section 1, pp. 2–6（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Definition 1.1; Theorems 1.2, 1.3; IntroductionによるCorollary 5.2とTheorem 10.1の概説
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2006.07888v7
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
