---
layout: paper
title: "Positivity of Smooth Currents on Singular Spaces"
title_ja: "特異空間上の滑らかなカレントの正値性"
authors: "Duc-Thai Do, Duc-Viet Vu"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  We study two notions of positivity for smooth currents on singular spaces. We show that they are not equivalent by establishing a necessary condition on the fourth Whitney cones. We also construct an explicit compact normal projective variety $X$ and a real smooth $(1,1)$-form $T$ on $X$ such that $T$ has local smooth ddc-potentials and is a Kähler current, but $T$ is not a positive form (hence not Hermitian).
topic: several-complex-variables
tags:
  - singularities
  - positivity
  - complex-analytic-spaces
arxiv_id: "2609.04335v1"
arxiv_url: "https://arxiv.org/abs/2609.04335"
arxiv_submitted: "2026-09-03"
arxiv_updated: "2026-09-03"
summary: >-
  特異複素空間上では、滑らかな $(1,1)$-形式を正カレントとみなす正値性と、局所埋め込みから定まる正形式としての正値性が一致しないことを示す。第4 Whitney錐による判定を与え、局所的に滑らかなポテンシャルを持つKählerカレントでありながら正形式ではない具体的なコンパクト正規射影多様体上の例を構成する。
abstract_en: ""
summary_en: >-
  The paper compares two positivity tests for smooth real $(1,1)$-forms on singular complex spaces: positivity after viewing the form as a current and positivity inherited from ambient local embeddings. It identifies the fourth Whitney tangent cone as the geometric object controlling the former test and gives conditions under which the two tests separate. A global construction then produces a compact normal projective example carrying a smooth Kähler current that is not a positive form.
abstract_ja: >-
  特異空間上の滑らかなカレントに対する二つの正値性概念を比較し、第4 Whitney錐に関する必要条件を通じて両者が同値でないことを示す。さらに、コンパクト正規射影多様体 $X$ と実滑らかな $(1,1)$-形式 $T$ を具体的に構成する。この $T$ は局所的に滑らかな $dd^c$-ポテンシャルを持つKählerカレントであるが、正形式ではなく、したがってHermitian形式でもない。
abstract_source_url: "https://arxiv.org/abs/2609.04335"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.04335](https://arxiv.org/abs/2609.04335)
- **著者:** Duc-Thai Do, Duc-Viet Vu
- **初回投稿日:** 2026年9月3日
- **最終更新日:** 2026年9月3日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな複素多様体上では、滑らかな実 $(1,1)$-形式を正カレントとして検査することと、接ベクトル上で半正定値であることは同じ正値性を表す。しかし特異複素空間では、正カレントとしての検査が見る接方向と、局所埋め込みに由来する正形式の検査が見る接方向との間に隔たりが生じ得る。

本論文は、前者が各点の第4 Whitney錐 $C_4(X,x)$ 上の正値性によって特徴づけられることを出発点とする。特異点では $C_4(X,x)$ がZariski接空間 $T_xX$ の真部分集合となり得るため、Whitney錐上では正であっても接空間全体では半正定値でない形式が存在し得る。

この局所的な差を大域化し、局所的に滑らかなポテンシャルを持つ閉実 $(1,1)$-形式がKählerカレントでありながら正形式ではない例を構成する。Introductionはさらに、仮定を満たす具体的なコンパクト正規射影空間を後半で与えると述べており、二つの正値性が実際に異なることを明示する。

## 背景と問題設定

複素空間 $X$ のHermitian計量または正形式は、局所埋め込み $X\hookrightarrow\Omega$ を通じて周囲の複素多様体上の厳密正または半正の形式を制限して得られるものとして定義される。一方、Kählerカレント $S$ は、あるHermitian計量 $\omega$ と $\delta>0$ に対して

$$
S\geq \delta\omega
$$

を満たす閉正 $(1,1)$-カレントである。滑らかな空間では一致するこれらの見方が、特異点でどこまで一致するかが中心問題となる。

第4 Whitney錐 $C_4(X,x)$ は、正則点 $x_\nu\to x$ の接空間内のベクトルの極限からなる。純次元複素空間では、滑らかな形式が正カレントであることは全ての $x$ で $C_4(X,x)$ 上半正であることと同値だが、正形式であるためには局所埋め込みの接空間全体での半正値性が必要となる。

## 主結果

### 正形式でないための判定（Theorem 1）

$X$ を複素空間、$\theta$ を滑らかな実 $(1,1)$-形式、$x_0\in X$ とする。$C_4(X,x_0)$ が $T_{x_0}X$ のどの複素超平面にも含まれない既約成分を持ち、ある局所的な滑らかな延長 $\theta'$ の $T_{x_0}X$ への制限が半正定値でないならば、$\theta$ は滑らかな正形式ではない。

この定理は、Whitney錐が接空間全体より小さい特異点では、正カレントとして見えない負方向が残り得ることを捉える。

### Kählerカレントと正形式を分離する構成（Theorem 2）

$X$ をコンパクト純次元Kähler空間、$x_0\in X$ とし、

$$
\dim_{\mathbb C} C_4(X,x_0)<\dim_{\mathbb C}T_{x_0}X
$$

かつ $C_4(X,x_0)$ がどの複素超平面にも含まれない既約成分を持つと仮定する。このとき、$X$ 上には滑らかな局所ポテンシャルを持つ閉実 $(1,1)$-形式 $\theta$ で、Kählerカレントではあるが滑らかな正形式ではないものが存在する。特に $\theta$ はKähler形式ではない。

## 証明の見取り図

まず $C_4(X,x_0)\subsetneq T_{x_0}X$ を用い、Whitney錐の方向では正定値だが接空間全体では不定値となる局所的な定数Hermitian形式を作る。超平面に関する仮定により、Whitney錐上で同じ値を取る別の延長へ取り替えても、接空間全体で正定値にはできない。これが局所的な反例を与える。

次に標準的なcut-offを使って局所形式を大域形式へ組み込み、Kählerカレントとしての下界を保ちながら正形式としての障害を残す。Introductionでは、この一般構成に加えてTheorem 2の仮定を満たす具体的な正規射影空間をSection 5で提示すると説明されている。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.04335](https://arxiv.org/abs/2609.04335)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1, 2; Lemma 12; Corollary 17
- **論文構成の説明:** Introduction, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
