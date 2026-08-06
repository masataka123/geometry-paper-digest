---
layout: paper
title: "Linearisation problem under finite étale cover"
title_ja: "有限エタール被覆のもとでの線形化問題"
authors: "Xiaojun Wu"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.DS
topic: several-complex-variables
arxiv_id: "2606.03039v1"
arxiv_url: "https://arxiv.org/abs/2606.03039v1"
arxiv_submitted: "2026-06-02"
arxiv_updated: "2026-06-02"
summary: >-
  複素多様体に埋め込まれた部分多様体の近傍を、有限Galoisエタール被覆上での線形化から元の近傍へ降下できる条件を調べる。コホモロジー消滅による一意性を利用し、hyperelliptic多様体やHopf多様体の近傍の完全・垂直線形化へ応用する。
abstract_en: ""
summary_en: >-
  This paper asks when a neighborhood linearization constructed after a finite Galois étale cover descends to the original embedded complex manifold. Vanishing conditions on cohomology groups provide both existence and uniqueness needed for equivariance and descent. The criteria yield full linearization results near hyperelliptic manifolds and certain Hopf manifolds. A parallel argument treats vertical linearization, interpreted as the existence of a regular holomorphic foliation having the submanifold as a leaf.
abstract_ja: >-
  有限Galoisエタール被覆へ持ち上げた複素部分多様体の近傍が線形化できるとき、その線形化を被覆前へ降下させる条件を与える。形式線形化の障害を担う1次コホモロジーと、一意性を制御する0次コホモロジーの消滅を仮定することで、群作用と両立する線形化を得る。結果をhyperelliptic多様体と特定のHopf多様体に適用し、完全線形化および葉層を与える垂直線形化を導く。
abstract_source_url: "https://arxiv.org/abs/2606.03039v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.03039v1](https://arxiv.org/abs/2606.03039v1)
- **著者:** Xiaojun Wu
- **初回投稿日・最終更新日:** 2026年6月2日
- **主分類・副分類:** math.CV（主分類）, math.AG, math.DS
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

埋め込み $C\subset M$ の近傍を法束 $N_{C/M}$ の零切断近傍と双正則に同一視することを完全線形化という。古典的なformal principleや小除数問題の流れにある問いだが、この論文は有限Galoisエタール被覆 $p:\widehat C\to C$ 上で線形化できるとき、それを $C$ へ降下できるかを扱う。

被覆上の線形化が $G$-equivariantなら降下できるため、鍵は線形化の一意性である。論文は0次コホモロジーの消滅で一意性を、1次コホモロジーの消滅で形式線形化の障害の消滅を確保する。

応用では、Diophantine条件を満たす法束を持つhyperelliptic多様体と、irrationality条件を満たす非Hermitian平坦直線束を法束に持つHopf多様体について完全線形化を得る。さらに「垂直線形化」を、$C$ を葉とする正則葉層の存在として降下させる条件も与える。

## 背景と問題設定

Grauertの問題は、部分多様体の形式近傍の同値が実際の双正則同値を導くかを問う。法束が負なら剛性が働く一方、平坦な法束ではArnol'd型の小除数条件が現れる。本論文は被覆によって幾何を単純化し、被覆上の解の一意性から有限群作用との両立性を自動的に得るという降下の仕組みを定式化する。

## 主結果

### 完全線形化の降下（Theorem 1.1）

$C^n\subset M^{n+d}$ の法束が局所定数Hermitian行列の遷移関数を持ち、有限Galoisエタール被覆 $\widehat C\to C$ に付随する近傍が法束内で線形化されているとする。さらに全 $l\geq1$ について

$$H^0(\widehat C,T_{\widehat C}\otimes\operatorname{Sym}^lN^*)=H^1(\widehat C,T_{\widehat C}\otimes\operatorname{Sym}^lN^*)=0,$$

全 $l\geq2$ について

$$H^0(\widehat C,N\otimes\operatorname{Sym}^lN^*)=H^1(\widehat C,N\otimes\operatorname{Sym}^lN^*)=0$$

と仮定する（$N=N_{\widehat C/\widehat M}$）。このとき $C$ の $M$ 内の近傍は $N_{C/M}$ の零切断近傍と双正則である。

### 具体例（Corollaries 1.2, 1.3）

hyperelliptic多様体ではトーラス被覆上の誘導法束がIntroduction所定のDiophantine条件を満たせば完全線形化される。genericまたはclassical typeのHopf多様体を余次元1で埋め込む場合には、primary Hopf surface被覆上の法束が非Hermitian平坦で所定のirrationality条件を満たすことが十分条件となる。

### 垂直線形化（Theorem 1.4）

余次元1で、被覆上に垂直線形化があり、余法束列が分裂し、Introductionに列挙された $N^{-k}$ および $\Omega^1_{\widehat C}\otimes N^{-k}$ の0次・1次コホモロジーが消滅すると仮定する。このとき元の近傍には $C$ を葉とする正則正則葉層が存在する。

## 証明の見取り図

線形化を次数ごとに構成すると、1次コホモロジーが障害を、0次コホモロジーが選択の自由度を表す。消滅仮定のもとでは被覆上の線形化が一意となるためGalois群作用で不変であり、商へ降下する。垂直の場合は葉層を定める束値正則1形式の高次Taylor項を消し、その一意性を使って同じ降下を行う。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.03039v1](https://arxiv.org/abs/2606.03039v1)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorem 1.1, Corollaries 1.2–1.3, Theorem 1.4, Corollary 1.5
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
