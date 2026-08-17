---
layout: paper
title: "Holomorphic and Formal First Integrals for Foliations of Codimension One on Complex Analytic Space Germs"
title_ja: "複素解析空間芽上の余次元1葉層の正則・形式的第一積分"
authors: "Victor León, Bruno Scárdua"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.GT
topic: several-complex-variables
tags:
  - vector-bundles-sheaves
  - foliations
  - complex-analytic-spaces
arxiv_id: "2608.06491v1"
arxiv_url: "https://arxiv.org/abs/2608.06491v1"
arxiv_submitted: "2026-08-06"
arxiv_updated: "2026-08-06"
summary: >-
  正規複素解析空間芽上の余次元1正則葉層について、葉の閉性と原点へ集積する葉の有限性から正則第一積分を特徴づける。曲面上の Mattei--Moussu 型定理を特異な周囲空間へ拡張し、追加仮定の下で高次元への延長と形式的第一積分からの正則第一積分の存在も導く。
abstract_en: >-
  We study holomorphic and formal first integrals for germs of codimension-one holomorphic foliations on normal complex analytic spaces. In dimension two, under the assumption that the dual graph of the exceptional divisor of a resolution is a tree, we prove that the foliation admits a holomorphic first integral if and only if its leaves are closed outside the singular point and only finitely many leaves accumulate at that point. This extends a classical integrability theorem of Mattei and Moussu to singular ambient spaces. We also prove a holomorphic prolongation theorem for normal quotient germs admitting a smooth quasi-étale cover and a smooth connected lift of a generic two-dimensional section. We record, in addition, a conditional formal prolongation statement under depth assumptions on the conormal powers and an injectivity condition for the corresponding differential-form obstruction modules. Under the quotient-prolongation hypothesis, and with a reduced tangent cone where formal restriction must be detected, the higher-dimensional integrability results follow from their surface counterparts. We give a reduced nonnormal example satisfying both dynamical conditions but admitting no holomorphic first integral, showing that normality is essential. Our arguments combine resolution of singularities, holonomy techniques, formal completion, and extension properties of holomorphic functions on normal analytic spaces.
summary_en: ""
abstract_ja: >-
  正規複素解析空間芽上の余次元1正則葉層について、正則および形式的第一積分の存在を調べる。解消の例外因子の双対グラフが木である曲面芽では、正則第一積分の存在が、原点外で葉が閉じており原点へ集積する葉が有限個であることと同値になる。適切な商特異点と一般曲面切断を仮定した高次元への延長定理、形式的第一積分から正則第一積分を得る定理、および形式的延長に関する条件付き結果も与える。正規性を外すと特徴づけが破れる反例も示される。
abstract_source_url: "https://arxiv.org/abs/2608.06491v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.06491v1](https://arxiv.org/abs/2608.06491v1)
- **著者:** Victor León, Bruno Scárdua
- **初回投稿日:** 2026年8月6日
- **最終更新日:** 2026年8月6日（v1）
- **主分類・副分類:** Complex Variables (math.CV); Geometric Topology (math.GT)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## 要約

正則葉層の第一積分とは、その微分が葉層方向に消える非定数正則関数であり、葉を関数のレベル集合として記述する。本論文は、滑らかな $\mathbb C^n$ での Mattei--Moussu の積分可能性定理を、特異点をもつ正規複素解析空間芽へ拡張する。

曲面芽では、解消の例外因子の双対グラフが木である「normal-tree」条件の下、正則第一積分が存在することと、原点外で葉が閉集合となり原点へ集積する葉が有限個しかないという二つの力学的条件とが同値になる。正規でない被約空間では二条件を満たしても第一積分が存在しない例があり、正規性は単なる技術的仮定ではない。

形式的第一積分についても、normal-tree 曲面芽上では形式解の存在から正則第一積分の存在が従う。したがってこの設定では、形式的積分可能性と解析的積分可能性の隔たりが解消される。

高次元では、一般曲面切断上の第一積分を周囲空間へ延長することが新たな障害となる。著者らは滑らかな有限 quasi-étale 被覆をもつ商芽と、持ち上げた一般曲面切断の滑らかさ・連結性を仮定して正則延長定理を証明する。被覆仮定を使わない形式的延長も与えるが、こちらには深さ条件と微分形式の障害加群に関する単射性が必要で、収束までは主張しない。

## 背景と問題設定

曲面芽 $(X,0)$ が **normal-tree** であるとは、$X$ が正規で、良い特異点解消の例外因子の双対グラフが木であることをいう。点爆発をさらに行っても木である性質は保たれるため、定義は選んだ良い解消に依存しない。合理特異点や商曲面特異点は重要な例である。

葉層 $\mathcal F$ の正則第一積分は $f\in\mathcal O_{X,0}$ であり、局所的に葉が $f$ のレベル集合に沿う。形式的第一積分 $\widehat f\in\widehat{\mathcal O}_{X,0}$ は完備化の中で同じ微分方程式を満たすが、一般には収束するとは限らない。本論文は、葉の力学的性質、形式解、正則解の三者を特異解析空間上で結ぶ。

## 主結果

### 曲面芽の力学的特徴づけ（Theorem A）

$(X,0)$ を normal-tree 複素解析曲面芽、$\mathcal F$ をその上の曲線による正則葉層芽とする。このとき次が同値である。

1. $\mathcal F$ は正則第一積分 $f\in\mathcal O_{X,0}$ をもつ。
2. ある近傍 $0\in U\subset X$ 上の代表 $\mathcal F_U$ が存在し、その葉は $U\setminus\{0\}$ の閉集合であり、原点へ集積する葉は有限個だけである。

これは滑らかな周囲空間についての Mattei--Moussu の定理を特異曲面へ拡張する。論文中の被約非正規例は、2 の力学的条件だけでは不十分であり、正規性が必要であることを示す。

### 高次元の特徴づけ（Theorem B）

次元 $n\ge2$ の normal-tree 複素解析空間芽上の余次元1葉層でも、第一積分の存在と同じ二つの力学的条件が同値になる。ただし $n\ge3$ では、葉層が可積分正則1形式 $\omega$ で定義され、$\operatorname{codim}_X\operatorname{Sing}(\mathcal F)\ge2$ であることに加え、対 $((X,0),\mathcal F)$ が論文の Definition 1 にいう quotient-prolongation-admissible であることを仮定する。

この追加条件は、$(X,0)\simeq(\widetilde X,\widetilde0)/G$ となる滑らかな有限 quasi-étale 被覆をもち、一般の二次元切断の被覆への被約逆像が滑らかで連結となることを要求する。したがって高次元の結論は任意の正規芽についての無条件な主張ではない。

### 形式的第一積分の解析化（Theorems C and D）

Theorem C は normal-tree 曲面芽上で、形式的第一積分 $\widehat f\in\widehat{\mathcal O}_{X,0}$ が存在すれば正則第一積分 $f\in\mathcal O_{X,0}$ が存在すると述べる。

Theorem D はこの結論を高次元へ拡張する。Theorem B の高次元仮定に加えて接錐 $C_0(X)$ が被約であり、非定数形式関数が

$$
\omega\wedge d\widehat f=0
$$

を完備化した Kähler 2形式加群で満たすなら、$\mathcal F$ は正則第一積分をもつ。

### 正則延長定理（Theorem E）

次元 $n\ge3$ の正規既約芽 $(X,0)$ と一般の正規曲面切断 $i:(Y,0)\hookrightarrow(X,0)$ を考える。$Y$ が $X$ と葉層の特異集合に原点でだけ交わり、制限葉層が孤立特異点と正則第一積分 $f_0$ をもつとする。Definition 1 の滑らかな quasi-étale 被覆条件が満たされれば、$f_0$ は

$$
i^*f=f_0
$$

を満たす周囲空間の正則第一積分 $f\in\mathcal O_{X,0}$ へ延長される。これが曲面の Theorem A から高次元の Theorem B へ進む橋渡しである。

### 条件付き形式延長（Theorem F）

被覆による商という仮定を置かない代わりに、一般曲面切断のイデアル $I=I_{Y,0}$ の各冪について $\operatorname{depth}_{\mathfrak m_Y}(I^k/I^{k+1})\ge2$ と、Introduction に明記された微分2形式の制限写像の単射性を仮定する。このとき $f_0$ は $I$-進形式的第一積分へ延長される。ただしこの結果は形式的であり、著者らは収束を主張していない。

## 証明の見取り図

曲面の場合は特異点解消を行い、例外因子に沿う葉層の holonomy と葉の閉性・集積条件を用いて Mattei--Moussu 型の議論を特異周囲空間へ移す。正規性は、穿孔近傍で得た正則関数を特異点を越えて延長する役割を担う。

高次元では一般の二次元切断へ制限して曲面定理を適用し、Theorem E で切断上の第一積分を延長する。有限 quasi-étale 被覆上で切断を滑らかな連結曲面として扱い、延長後に有限群作用に適合させて商へ降ろすことが論理の要点である。

形式的問題では、無限小近傍ごとに第一積分を逐次持ち上げる。Theorem F の深さ条件と局所コホモロジーの消滅に相当する単射性は、各段階の延長障害を除くために使われる。曲面の形式解または高次元の被約接錐を伴う形式解から正則第一積分を得る際には、まず曲面結果へ帰着し、その後に正則延長定理を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.06491v1](https://arxiv.org/abs/2608.06491v1)
- **Introduction:** Section 1, pp. 2--4
- **Introduction中で言及された主要定理番号:** Theorems A--F
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons Attribution 4.0 International (CC BY 4.0)
- **source_scope:** Abstract and Introduction
