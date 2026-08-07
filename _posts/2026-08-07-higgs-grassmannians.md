---
layout: paper
title: "Higgs Grassmannians"
title_ja: "Higgs Grassmann多様体"
authors: "Ugo Bruzzo, Michele Graffeo, Beatriz Graña Otero"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2605.29147v1"
arxiv_url: "https://arxiv.org/abs/2605.29147v1"
arxiv_submitted: "2026-05-27"
arxiv_updated: "2026-05-27"
summary: >-
  Higgs束の階数 $d$ のHiggs部分束を表現するHiggs Grassmannianを通常のGrassmann束の閉部分スキームとして具体化し、その幾何をHiggs場の局所Jordan型から調べる。階数1の場合のgeneric fiberの有限性、Simpson systemの半安定性、spectral coverとの全射という応用を与える。
abstract_en: ""
summary_en: >-
  The paper studies the parameter schemes of invariant subbundles of a Higgs bundle as closed subschemes of ordinary Grassmann bundles. It gives explicit defining equations and relates the geometry of rank-one parameter spaces to the local Jordan form of the Higgs field, with a sharper description in rank two. These results are applied to the semistability of the Simpson system and to a natural map from the rank-one Higgs Grassmannian onto the spectral cover. Flag schemes of invariant subbundles and Higgs Quot schemes are also introduced.
abstract_ja: >-
  滑らかな多様体上のHiggs束に対し、そのHiggs部分束をパラメータ化するHiggs Grassmannianを研究する。通常のGrassmann束内の閉部分スキームとして方程式を記述し、局所Jordan型によってその構造を特徴づける。多くの場合にgeneric fiberが0次元となること、階数2では特性多項式の判別式による精密化が可能なことを示す。さらにSimpson systemの半安定性、階数1のHiggs Grassmannianとspectral coverの関係へ応用し、Higgs部分束のflag schemeとHiggs quotientを表すQuot schemeも導入する。
abstract_source_url: "https://arxiv.org/abs/2605.29147v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.29147v1](https://arxiv.org/abs/2605.29147v1)
- **著者:** Ugo Bruzzo, Michele Graffeo, Beatriz Graña Otero
- **初回投稿日・最終更新日:** 2026年5月27日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Higgs束 $\mathcal E=(E,\varphi)$ の安定性では、すべての部分束ではなく $\varphi$-不変な部分束だけを調べる。そこで本論文は、通常のGrassmann束が部分束の族を表現するのと同様に、階数 $d$ のHiggs部分束の族を表現するスキーム $\operatorname{Gr}_d(\mathcal E)$ を中心対象とする。

$\operatorname{Gr}_d(\mathcal E)$ は $\operatorname{Gr}_d(E)$ の閉部分スキームであり、universal subbundleからuniversal quotientへのHiggs場の成分が消える零点スキームとして定義される。論文はこの定義を局所方程式へ落とし、階数1ではHiggs場のJordan型がfiberの構造を強く支配することを示す。

とくに多くの状況で階数1 Higgs Grassmannianのgeneric fiberは0次元となり、Higgs部分束が「少ない」ことがスキームの次元として可視化される。任意次元の基底では可換な局所行列の同時構造を用い、階数2では特性多項式の判別式からさらに精密な分類を行う。

この構造論は、滑らかな多様体に付随するSimpson systemの半安定性の簡潔な証明と、階数1 Higgs Grassmannianからspectral coverへの全射の構成につながる。Introductionは最後にflag schemeとHiggs Quot schemeへの拡張も予告する。

## 背景と問題設定

滑らかな $X$ 上のHiggs束は $\varphi:E\to E\otimes\Omega_X^1$ と $\varphi\wedge\varphi=0$ を備えたベクトル束である。$\operatorname{Gr}_d(E)$ 上のuniversal exact sequenceを

$$
0\longrightarrow S_d\longrightarrow\pi_d^*E\longrightarrow Q_d\longrightarrow0
$$

とすると、$\operatorname{Gr}_d(\mathcal E)$ は合成 $S_d\to\pi_d^*E\xrightarrow{\pi_d^*\varphi}\pi_d^*E\otimes\Omega^1\to Q_d\otimes\Omega^1$ の零点スキームである。このscheme-theoreticな定義により、非被約・可約・非等次元なfiberも保持したまま部分束の族を扱える。

## 主結果

### 閉部分スキームとしての方程式

Introductionでは概略として次のように述べられている。著者らは任意の $d$ についてPlücker座標で定義イデアルを与える。とくに $d=1$、局所枠で $\varphi=(\varphi_{ij})$、$\mathbf P(E)$ の斉次座標を $z_i$ とすると、方程式は

$$
\sum_{k=1}^r z_k(\varphi_{jk}z_i-\varphi_{ik}z_j)=0
\qquad(1\leq i<j\leq r)
$$

となる。

### Jordan型による階数1 fiberの記述

曲線上ではHiggs場のgeneric Jordan型を用い、階数1 Higgs Grassmannianの構造を特徴づける。高次元でも局所的な可換行列族の一つが単一Jordan blockを持つ場合に他を上三角Toeplitz型へ置き、複数の異なる固有値blockの場合へ拡張する。これによりgeneric fiberがしばしば0次元であることが説明される。

### Simpson systemとspectral coverへの応用

$S=\mathcal O_X\oplus\Omega_X^1$、$\varphi(f,\omega)=(\omega,0)$ で定まるSimpson systemのHiggs Grassmannianを特徴づけ、$T_X$ の半安定性を使って $S$ の半安定性を導く。またspectral cover $S_{\mathcal E}$ への全射

$$
g:\operatorname{Gr}_1(\mathcal E)\longrightarrow S_{\mathcal E}
$$

を構成し、$S_{\mathcal E}$ の滑らかな部分上ではsectionが存在することを示す。

## 証明の見取り図

まずuniversal sequenceから不変性条件を零点条件として書き、局所枠とPlücker座標で明示的な方程式を得る。fiberの解析では、曲線上でJordan型が一定となる開集合へ制限し、高次元ではHiggs条件が与える局所行列の可換性を線形代数へ翻訳する。Simpson systemでは得られた部分束の記述を傾きの比較へ用い、spectral coverとの関係では固有lineから固有値データを取り出す。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.29147v1](https://arxiv.org/abs/2605.29147v1)
- **Introduction:** Section 1, pp. 2–3
- **Introduction中の主要な構成:** Sections 2–8の構成説明
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
