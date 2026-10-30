---
layout: paper
title: 'From Stein manifolds to Oka manifolds: the h-principle in complex analysis'
title_ja: Stein多様体からOka多様体へ：複素解析のh原理を概観する
authors: Franc Forstneric
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DG
arxiv_abstract: This introduction to the homotopy principle in complex analysis and geometry, better known as the Oka theory, is aimed at wide mathematical audience. After a brief historical survey of the h-principle in smooth analysis and geometry, I present the key notions of Oka manifolds and Oka maps, which developed from the Oka-Grauert principle and Gromov's theory of elliptic complex manifolds and elliptic holomorphic submersions. I discuss recent and ongoing developments, open problems, and mention some applications. The paper also includes a brief survey of the recently developed h-principles in the classical theory of minimal surfaces.
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
arxiv_id: 2509.21197v1
arxiv_url: https://arxiv.org/abs/2509.21197
arxiv_submitted: '2025-09-25'
arxiv_updated: '2025-09-25'
summary: 複素解析のh原理を、Stein空間を源、Oka多様体を標的とする写像の理論として概観する総説である。凸集合上の近似性と相対楕円性によるOka性の特徴付けを軸に、既知の結果、最近の進展、未解決問題を整理し、幾何的な柔軟性と位相的障害の関係を説明する。
abstract_en: This introduction to the homotopy principle in complex analysis and geometry, better known as the Oka theory, is aimed at wide mathematical audience. After a brief historical survey of the h-principle in smooth analysis and geometry, I present the key notions of Oka manifolds and Oka maps, which developed from the Oka-Grauert principle and Gromov's theory of elliptic complex manifolds and elliptic holomorphic submersions. I discuss recent and ongoing developments, open problems, and mention some applications. The paper also includes a brief survey of the recently developed h-principles in the classical theory of minimal surfaces.
summary_en: ''
abstract_ja: 本稿は幅広い数学読者に向け、複素解析・複素幾何におけるホモトピー原理、すなわちOka理論を紹介する総説である。滑らかな幾何でのh原理の歴史から出発し、Oka–Grauert原理とGromovの楕円的多様体・正則沈め込みの理論を背景に、Oka多様体とOka写像を説明する。最近の進展と未解決問題、応用を整理し、極小曲面の理論で発展したh原理にも触れる。
abstract_source_url: https://arxiv.org/abs/2509.21197
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.21197v1](https://arxiv.org/abs/2509.21197)
- **著者:** Franc Forstneric
- **初回投稿日:** 2025-09-25
- **最終更新日:** 2025-09-25
- **主分類・副分類:** math.CV（主分類）; math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

h原理とは、解析的な解の存在を妨げるものが位相的・ホモトピー論的な障害だけになるという現象である。複素解析では、Stein空間からの連続写像を正則写像へ変形できるかというOka原理がその典型となる。本稿はこの理論を広い読者へ紹介する総説であり、Introductionの定理をすべて本稿で初めて証明したものとして読むべきではない。

中心にあるのは、Oka性を一つの扱いやすい条件で捉えることである。凸コンパクト集合上での正則写像の近似性CAPと、写像に沿って全方向の変形を与える凸相対楕円性CREが、Oka性と同値である。この同値を通じて、近似・補間・パラメータ付きの諸原理が一つの理論にまとまる。

Introductionは、Oka写像による性質の移行、Zariski局所性、楕円性との関係も整理する。射影Oka多様体の楕円性などの進展と、一般のdominabilityからOka性を導けるかという未解決問題を区別している。ここでの記述は確認した2025年の版における研究状況である。

## 背景と問題設定

パラメータ付きh原理では、既に真の解となっているパラメータ部分を固定しながら形式解の族を真の解へ変形する。これが成り立つと、真の解の空間から形式解の空間への包含は弱ホモトピー同値となる。

Oka–Grauert原理は、Stein空間上の複素ベクトル束などの正則分類が位相的分類と一致することを示した。Gromovは、支配的な正則sprayの存在という楕円性を使って理論を拡張した。その後の課題は、楕円性が必要か、またOka性をより単純な近似条件で特徴付けられるかという点にあった。

## 主結果

### CAPによるOka性の特徴付け（Theorem 1.2）

複素多様体 $Y$ が凸近似性CAPを持つとは、任意の $n\geq1$、凸コンパクト集合 $K\subset\mathbb C^n$、その近傍上の正則写像 $f$ に対し、$f|\_K$ を全空間からの正則写像 $\mathbb C^n\to Y$ で一様近似できることをいう。

Theorem 1.2は、CAPが、任意のStein空間からの写像について近似・補間・パラメータ条件を含むOka諸性質をすべて導き、それらが互いに同値であると述べる。これは著者の複数の先行研究をまとめた定理として紹介されている。単に一つの連続写像を正則化できるという性質だけを、無条件にすべてのOka性と同一視しているわけではない。

### 凸相対楕円性との同値（Theorem 1.6）

Introductionの主要な対応は

$$
\mathrm{OKA}\quad\Longleftrightarrow\quad\mathrm{CAP}\quad\Longleftrightarrow\quad\mathrm{CRE}
$$

である。CREでは、上の $f:U'\to Y$ に対し $K$ の近傍 $U\subset U'$ と、ある $N$ に対する正則写像

$$
F:U\times\mathbb C^N\to Y,\qquad F(z,0)=f(z)
$$

が存在し、すべての $z\in U$ で

$$
dF(z,\cdot)|\_0:T\_0\mathbb C^N\longrightarrow T\_{f(z)}Y
$$

が全射となることを要求する。パラメータ方向が小さな球だけでなく $\mathbb C^N$ 全体に及ぶことが重要である。Oka性からの方向はjet補間を使い、CREからCAPへの方向はKusakabeの結果として説明される。

### 切断とOka写像（Theorems 1.3、1.4）

Stein空間上の層別化された正則ファイバー束のファイバーがOka多様体なら、その切断はOka原理のすべての形を満たす（Theorem 1.3）。

Oka写像は、正則写像の連続持ち上げを近似・補間とともに正則化できる性質を持つだけでなく、位相的なSerreファイブレーションであることも要求される。連結複素多様体間のOka写像 $Y\to Z$ について、$Y$ がOkaであることと $Z$ がOkaであることは同値である（Theorem 1.4）。任意の正則全射に同じ結論を拡張する主張ではない。

### Zariski局所性と未解決問題（Theorem 1.7）

すべての点がZariski開なOka近傍を持つ複素多様体はOkaである。ここでZariski開とは補集合が閉複素部分空間であることを意味する。このKusakabeの定理はCREの特徴付けから得られ、新しいOka多様体を構成する手段となる。

Oka多様体は各点でEuclid空間からdominateされる。しかし、この版のIntroductionはその逆が一般に成り立つかを未解決として扱う。また、射影Oka多様体は楕円的である一方、非コンパクトなOka多様体には楕円的でない例があり、コンパクト非射影の場合には問題が残る。これらを一括して「Oka性とdominabilityと楕円性が常に同値」とまとめることはできない。

## 証明の見取り図

本稿のIntroductionは新しい一つの定理の証明ではなく、理論間の論理関係を案内する。古典的な束の分類からsprayを用いる楕円性へ、さらにCAPとCREによる特徴付けへ進む。jet補間は局所的なsprayを全パラメータ空間へ伸ばすために働き、CREからCAPへの含意が同値関係を閉じる。

後続節ではStein多様体、Oka多様体と写像、楕円性、極小曲面のh原理へと議論が進む。IntroductionはAndersén–Lempert理論とdensity property、正則埋め込み・沈め込み、極小曲面などへの応用も紹介するが、本記事ではそれぞれの後続節の証明までは検証していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2509.21197)
- **Introduction:** [PDF](https://arxiv.org/pdf/2509.21197v1) — Section 1, pp. 1–6（Section 2開始前）
- **Introduction中で言及された主要結果:** Definitions 1.1, 1.5; Theorems 1.2–1.4, 1.6, 1.7（総説として紹介される既知の結果）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2509.21197v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
