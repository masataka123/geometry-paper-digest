---
layout: paper
title: "Degenerations and Stability of Kähler Structures on Calabi--Yau Manifolds"
title_ja: "Calabi–Yau多様体上のKähler構造の退化と安定性"
authors: "Kefeng Liu, Yang Shen"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2605.18065v1"
arxiv_url: "https://arxiv.org/abs/2605.18065v1"
arxiv_submitted: "2026-05-18"
arxiv_updated: "2026-05-18"
summary: >-
  同じKähler多様体列がCalabi–Yau極限を一つ持つなら、別の複素多様体極限もKählerであることを変形理論とHodge理論から示す。Weil–Petersson距離とBeltrami微分の比較を核に、K3曲面のKähler性、bounded periodを持つhyperkähler極限、K3上の安定層モジュライへ応用する。
abstract_en: ""
summary_en: >-
  The paper studies whether Kählerness survives when a sequence of mutually diffeomorphic complex manifolds has more than one deformation-theoretic limit. If one limit is Calabi--Yau, the authors prove that every other limit is Kähler. Their mechanism combines large-scale Kähler stability on Kuranishi spaces with quantitative control of Beltrami differentials by the local Weil--Petersson distance. Applications include a Hodge-theoretic proof of the Kählerness of K3 surfaces, Kählerness of bounded-period hyperkähler limits, and hyperkählerness of certain moduli spaces of stable sheaves on K3 surfaces.
abstract_ja: >-
  自明な標準束を持つコンパクトKähler多様体としてのCalabi–Yau多様体について、Kähler構造の退化と安定性を変形理論・Hodge理論から研究する。大域的変形理論とWeil–Petersson距離・Beltrami微分の評価により、ある極限がCalabi–Yauなら特定の別極限もKählerにとどまることを示す。K3曲面に関するSiuの定理、bounded periodを持つhyperkähler多様体の極限、K3上の安定層モジュライへ応用する。
abstract_source_url: "https://arxiv.org/abs/2605.18065v1"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.18065v1](https://arxiv.org/abs/2605.18065v1)
- **著者:** Kefeng Liu, Yang Shen
- **初回投稿日・確認版の更新日:** 2026年5月18日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

同じ微分可能多様体上の複素構造列には、モジュライの非分離性のため複数の極限があり得る。本論文は、相互に微分同相なコンパクトKähler多様体の列が一つのCalabi–Yau極限を持つなら、存在する別の複素多様体極限もKählerであることを示す。

極限は、基準となる複素多様体上で0に収束する可積分Beltrami微分によって定義される。証明は、Beltrami微分の一様な $C^0$ 制御の下で働く大域的Kähler安定性と、Calabi–Yauモジュライの局所Weil–Petersson距離がBeltrami微分の $C^0$ ノルムと同値になるという定量評価を組み合わせる。

応用として、単連結で標準束が自明なコンパクト複素曲面がKählerであるというSiuのK3定理に新しい証明を与える。またperiodがコンパクト集合内にとどまるhyperkähler列の極限はKählerであり、円板上の族で一般ファイバーがhyperkählerなら中心ファイバーもKählerとなる。

さらに、K3曲面上の所定のMukaiベクトルを持つ安定torsion-free coherent sheafのモジュライがhyperkählerであるというPerego予想を解決したと主張する。これらは論文のAbstractとIntroductionにおける主張の整理であり、記事は後続節の証明を独立に検証するものではない。

## 背景と問題設定

$X_i\rightsquigarrow X$ とは、$X$ 上の可積分Beltrami微分 $\phi_i\to0$ があり、$X_i\cong X_{\phi_i}$ となることをいう。Kuranishi族でいえば、基点へ収束するパラメータ列が $X_i$ を表す。hyperkählerモジュライには非分離点があるため、この極限は一意とは限らない。

本論文でCalabi–Yau多様体とは標準束が自明なコンパクトKähler多様体を指す。問題は、一つの極限のKähler構造を、同じ列の別の極限へどのように回収するかである。

## 主結果

### Kähler剛性（Theorems 0.2 and 0.2'）

相互に微分同相なコンパクトKähler多様体列 $\{X_i\}$ がCalabi–Yau多様体 $Y$ を極限に持つなら、別の極限 $X$ もKählerである。Kuranishi族の定式化では、二つの族の点列について十分大きい $i$ で

$$
X_{t(i)}\cong Y_{t'(i)}
$$

が成り立てば、$X$ 側の中心ファイバー $X_0$ はKählerとなる。

### bounded periodを持つhyperkähler極限（Theorem 0.3）

同じ格子へmarkingしたhyperkähler多様体列のperiod点がperiod domainのコンパクト部分に含まれるなら、存在する任意の極限はKählerである。極限がさらにholomorphic symplecticならhyperkählerとなる。

### 退化族と安定層モジュライ（Theorems 0.4 and 0.6）

円板上の解析族で穿孔円板上のファイバーがhyperkählerなら、中心ファイバーはKählerである。これはSoldatenkov–Verbitsky予想のFujiki class $\mathcal C$ という結論を強める。またIntroductionのTheorem 0.6は、K3曲面上の安定層モジュライに関するConjecture 0.5（Perego予想）が真であると述べる。

## 証明の見取り図

第一の材料は、Beltrami微分の $C^0$ ノルムが一様に抑えられるKuranishi基底の広い領域でKähler性を保つ大域的安定定理である。第二は、Calabi–Yauモジュライの局所Weil–Petersson距離と対応するBeltrami微分の $C^0$ ノルムの比較である。

共通の近傍ファイバー $X_{t(i)}\cong Y_{t'(i)}$ をCalabi–Yau側の標準的計量で制御し、十分大きい $i$ では中心 $X_0$ が $X_{t(i)}$ のKähler安定領域に入ることを示す。これにより近傍ファイバーのKähler構造が中心へ延長される。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.18065v1](https://arxiv.org/abs/2605.18065v1)
- **Introduction:** Section 0, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 0.2, 0.2', 0.3, 0.4, 0.6; Conjecture 0.5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
