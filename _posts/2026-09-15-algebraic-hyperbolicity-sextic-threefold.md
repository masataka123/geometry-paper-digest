---
layout: paper
title: "Algebraic hyperbolicity of very general hypersurfaces in projective spaces"
title_ja: "射影空間内の非常に一般の超曲面の代数的双曲性"
authors: "Sixuan Lou, Junyan Zhao"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove that a very general sextic threefold in $\mathbb{P}^4$ is algebraically hyperbolic, settling the last open case and completing the classification of algebraic hyperbolicity for very general hypersurfaces in projective space. The proof follows the Coskun--Riedl scroll construction, with the moduli of stable maps and the logarithmic geometry of fibered surfaces as new ingredients.
topic: algebraic-geometry
tags:
  - hyperbolicity
  - moduli
arxiv_id: "2609.15628v1"
arxiv_url: "https://arxiv.org/abs/2609.15628"
arxiv_submitted: "2026-09-14"
arxiv_updated: "2026-09-14"
summary: >-
  非常に一般の六次三次元超曲面$X_6\subset\mathbb P^4$が代数的双曲的であることを証明し、射影空間内の非常に一般の超曲面に対する分類の最後の未解決例を埋める。安定写像のモジュライとファイバー曲面の対数幾何をscroll構成に組み込み、曲線の種数を次数で一様に下から抑える。
abstract_en: ""
summary_en: >-
  The last unresolved case in the classification of algebraic hyperbolicity for very general projective hypersurfaces is settled. The authors establish a uniform genus-versus-degree bound for curves on a very general sextic threefold in projective four-space. Their argument refines a scroll construction by using stable-map compactness and logarithmic inequalities for fibered surfaces.
abstract_ja: >-
  射影四次元空間内の非常に一般の六次三次元超曲面が代数的双曲的であることを示す。これにより、射影空間内の非常に一般の超曲面の代数的双曲性に関する分類が完成する。証明はCoskun--Riedlのscroll構成に沿いながら、安定写像のモジュライとファイバー曲面の対数幾何を新たな道具として用いる。
abstract_source_url: "https://arxiv.org/abs/2609.15628"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.15628](https://arxiv.org/abs/2609.15628)
- **著者:** Sixuan Lou, Junyan Zhao
- **初回投稿日:** 2026年9月14日
- **最終更新日:** 2026年9月14日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素射影多様体$X\subset\mathbb P^n$が代数的双曲的であるとは、ある$\varepsilon>0$が存在して、任意の既約曲線$C\subset X$に対し

$$
2p_g(C)-2\geq\varepsilon\deg C
$$

が成り立つことである。これは特に有理曲線と楕円曲線の存在を排除する。

非常に一般の超曲面については多くの次数・次元で分類が進んでいたが、$\mathbb P^4$内の六次三次元超曲面だけが残っていた。本論文はこの場合にも上の一様評価が成り立つことを示し、分類を完成させる。

六次三次元超曲面は随伴公式により$K_X=\mathcal O_X(1)$を満たす。Introductionは、Calabi--Yau閾値に近く標準束から得られる正値性が弱いことが、この場合を特に難しくしていたと説明する。

## 背景と問題設定

Brody双曲性は$\mathbb C$からの非定数正則写像がないという解析的概念であり、射影多様体では代数的双曲性を導く。両者の同値性は予想されているため、非常に一般の超曲面は代数幾何と複素解析の双曲性を比較する基本的な試験場となる。

本論文の問題は、非常に一般の$X_d\subset\mathbb P^n$がいつ代数的双曲的かを決めることである。既知結果を合わせると唯一残る$X_6\subset\mathbb P^4$を処理すれば分類が閉じる。

## 主結果

### 六次三次元超曲面の代数的双曲性（Theorem 1.2）

非常に一般の六次三次元超曲面$X_6\subset\mathbb P^4$は代数的双曲的である。すなわち$X_6$上のすべての既約曲線について、幾何種数と次数の間に正の定数を伴う一様な線形下界が存在する。

この定理と既知結果を組み合わせることで、射影空間内の非常に一般の超曲面に対する代数的双曲性の分類が完成する。

## 証明の見取り図

曲線の正規化写像$f:\widetilde C\to X$に変形理論を適用し、$\widetilde C$でパラメータ付けされた直線または平面が掃くscrollを作る。直線scrollは既存手法で扱え、核心は平面scrollの場合にある。

有限基底変換後、平面切断の族をKontsevich安定写像のモジュライの固有性によって安定曲線の族へ延長する。曲線上の点が定めるsectionを持つ一般型ファイバー曲面が得られ、その標準高さを対数Bogomolov--Miyaoka--Yau不等式で評価する。

平面切断の普遍族の底を有限個のstratumに分け、同時正規化を行うことで、基底変換の分岐と特異ファイバー数を$2g(\widetilde C)-2$で一様に抑える。これを高さ評価へ戻すと、目標の種数・次数不等式が得られる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.15628](https://arxiv.org/abs/2609.15628)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Theorem 1.2
- **論文構成の説明:** Section 1.2, pp. 2--3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
