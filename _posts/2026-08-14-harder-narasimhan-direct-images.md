---
layout: paper
title: "On the Harder-Narasimhan filtration of the direct image of the structure sheaf"
title_ja: "構造層の順像のHarder–Narasimhanフィルトレーション"
authors: "Indranil Biswas, Manish Kumar, A. J. Parameswaran"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
arxiv_id: "2604.22419v1"
arxiv_url: "https://arxiv.org/abs/2604.22419"
arxiv_submitted: "2026-04-24"
arxiv_updated: "2026-04-24"
summary: >-
  曲線上の有限射 $f:Y\to X$ に対する代数 $f_*\mathcal O_Y$ のHarder–Narasimhanフィルトレーションを、射影束内の因子や完全交叉という具体的な場合に計算する。順像を対称冪へ結び付けることで、計算しにくい標準フィルトレーションを元のベクトル束の不安定性から記述する。
abstract_en: ""
summary_en: >-
  This note calculates Harder–Narasimhan filtrations for structure-sheaf direct images under several finite morphisms. One family comes from an ample divisor in the projectivization of a rank-two bundle over a curve, where the answer is expressed through symmetric powers and the filtration of the original bundle. A second family concerns linear projections of projective complete intersections. The paper also records a splitting statement for direct images of acyclic bundles under finite maps to the projective line.
abstract_ja: >-
  いくつかの有限射について、構造層の順像ベクトル束のHarder–Narasimhanフィルトレーションを明示的に求める。主な対象は、曲線上の階数2ベクトル束の射影化に含まれる豊富な因子と、射影空間内の完全交叉から線形射影で得られる有限射である。
abstract_source_url: "https://arxiv.org/abs/2604.22419"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.22419v1](https://arxiv.org/abs/2604.22419v1)
- **著者:** Indranil Biswas, Manish Kumar, A. J. Parameswaran
- **初回投稿日・最終更新日:** 2026年4月24日（v1）
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな射影曲線上のベクトル束には、傾きが減少する半安定な商からなる一意的なHarder–Narasimhan（HN）フィルトレーションがある。しかし、その存在と一意性に比べて具体的な計算は一般に難しい。本論文は有限射 $f:Y\to X$ に伴う $f_*\mathcal O_Y$ を、幾何的に構成された場合に計算する。

第一の場合、階数2ベクトル束 $E$ の射影束 $\mathbb P_X(E)$ に豊富な因子 $Y$ を取り、射影を制限して $f:Y\to X$ とする。$Y$ の定義完全列と相対Serre双対を用いると、$f_*\mathcal O_Y/\mathcal O_X$ は $E^*$ の対称冪と線束のテンソル積として表される。このため $E$ が不安定なら、そのHN部分線束から順像のHN列を明示できる。

さらに、射影空間の完全交叉を線形部分空間から射影して得る有限射にも計算を拡張する。また、有限射 $\varphi:X\to\mathbb P^1$ と $H^0(X,E)=H^1(X,E)=0$ を満たす束 $E$ に対して、$\varphi_*E$ が $\mathcal O_{\mathbb P^1}(-1)$ の直和になることも指摘する。

## 背景と問題設定

$E$ を曲線 $X$ 上の階数2ベクトル束、$\varphi:\mathbb P(E)\to X$ を商直線をパラメータ化する射影束とする。Introductionで扱う因子は

$$
Y\in\left|\mathcal O_{\mathbb P(E)}(n)\otimes\varphi^*A\right|,
$$

であり、$f=\varphi|_Y$ は有限射である。定義完全列を押し下げると

$$
0\longrightarrow\mathcal O_X\longrightarrow f_*\mathcal O_Y
\longrightarrow \operatorname{Sym}^{n-2}(E^*)\otimes A^*\otimes\det(E)^*\longrightarrow0
$$

を得る。したがって問題は階数2束の対称冪のHN列へ還元される。

## 主結果

### 射影曲面内の因子（Lemma 2.1）

$E$ が標数0で半安定、または正標数で強半安定なら、$f_*\mathcal O_Y/\mathcal O_X$ もそれぞれ半安定、強半安定である。一方 $E$ が不安定でHN部分線束を $S\subset E$ とすれば、$E^*$ の対称冪に現れる自然な増大列（各段で $S$ または $E/S$ に由来する線束を一つずつ替える列）が、上の商のHNフィルトレーションを与える。

### 完全交叉と射影直線への順像

Introductionでは概略として次のように述べられている。$\mathbb P^n$ 内の余次元 $r$ の完全交叉を $r$ 次元線形部分空間から $\mathbb P^{n-r}$ へ射影する場合にも、Theorem 4.2が $f_*\mathcal O_Y$ のHNフィルトレーションを計算する。また $H^0$ と $H^1$ が消える曲線上の束の $\mathbb P^1$ への有限順像は、Lemma 5.1により $\mathcal O_{\mathbb P^1}(-1)$ の直和となる。

## 証明の見取り図

因子の構造層の完全列を $\varphi$ で押し下げ、射影公式と相対Serre双対で高次順像を対称冪へ変換する。階数2の不安定束では、HN列の二つの線束商が対称冪に単調な傾きの列を誘導するため、各商が半安定で傾きが正しい順序に並ぶことを直接確認できる。完全交叉の場合はKoszul型完全列が同じ役割を担う。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.22419v1](https://arxiv.org/abs/2604.22419v1)
- **Introduction:** Section 1, p. 1
- **Introduction中の主要結果:** Lemma 2.1, Theorem 4.2, Lemma 5.1への案内
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
