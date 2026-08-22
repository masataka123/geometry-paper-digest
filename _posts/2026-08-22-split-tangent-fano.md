---
layout: paper
title: "Fano varieties with split tangent sheaf"
title_ja: "接層が分裂するFano型多様体"
authors: "Andreas Höring"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $X$ be a mildly singular Fano variety such that the tangent sheaf is a direct sum. We show that the direct factors are algebraically integrable, so the infinitesimal decomposition induces a product structure on a quasi-\'etale cover of $X$.
topic: algebraic-geometry
tags:
  - fano-varieties
  - vector-bundles-sheaves
  - foliations
  - singularities
arxiv_id: "2602.15427v1"
arxiv_url: "https://arxiv.org/abs/2602.15427"
arxiv_submitted: "2026-02-17"
arxiv_updated: "2026-02-17"
summary: >-
  Fano型多様体の接層が二つの非零な因子に分裂するとき、各因子が代数的葉をもつ可積分分布になることを示す。さらに有限準エタール被覆上で、この無限小分解が多様体の積分解へ持ち上がる。
abstract_en: ""
summary_en: >-
  This paper studies normal Fano-type varieties whose tangent sheaf splits into two nonzero summands. Under klt and Q-factorial hypotheses, it proves that both induced distributions are integrable and have algebraic leaves. A product decomposition then appears after passing to a finite quasi-étale cover. For a smooth Fano manifold, simple connectedness removes the need for that cover.
abstract_ja: >-
  穏やかな特異点をもつFano多様体で接層が直和に分解される場合を扱う。各直和因子が代数的に可積分であることを示し、その結果、有限準エタール被覆上で接層の無限小分解から多様体の積構造が得られる。
abstract_source_url: "https://arxiv.org/abs/2602.15427"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.15427](https://arxiv.org/abs/2602.15427)
- **著者:** Andreas Höring
- **初回投稿日:** 2026年2月17日
- **最終更新日:** 2026年2月17日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接層の分裂 $T_X=V_1\oplus V_2$ は多様体の無限小な積構造を表すが、一般には各分布の可積分性さえ自動的ではない。本論文は、$X$ がFano型であれば、この障害が消えることを示す。

主結果は、正規・$\mathbb Q$-因子的・kltな射影多様体 $X$ がFano型であるとき、両因子 $V_i$ が代数的葉をもつ可積分分布になるというものである。これは滑らかなFano多様体に対しても新しい結果である。

既存の分解定理と組み合わせると、有限準エタール被覆 $X'\to X$ 上で $X'\simeq X_1\times X_2$ が得られる。滑らかなFano多様体は単連結なので被覆は不要となり、$X$ 自身が積に分解する。

## 背景と問題設定

Beauvilleの予想は、コンパクトKähler多様体の接束が可積分部分束へ分裂すれば、普遍被覆が対応する積へ分解すると予想する。しかし単なる直和表示では埋め込み方が一意でなく、非可積分な分布も生じうる。本論文はFano型という強い正値性の下で、可積分性を仮定から結論へ移す。

Fano型とは、ある境界因子 $\Delta$ に対して $(X,\Delta)$ がkltで $-(K_X+\Delta)$ がampleとなることである。このクラスではMMPを実行でき、接層の商の行列式に強い正値性がある。

## 主結果

### 主定理（Theorem 1.1）

$X$ を正規・$\mathbb Q$-因子的・射影的なklt多様体とし、

$$
T_X=V_1\oplus V_2
$$

とする。$X$ がFano型なら、$V_1,V_2$ はともに可積分で、その一般葉は代数的である。

### 準エタール被覆上の積分解（Corollary 1.2）

正規射影Fano型多様体で $T_X=V_1\oplus V_2$ なら、有限準エタール被覆 $\nu:X'\to X$ と正規多様体 $X_1,X_2$ が存在して

$$
X'\simeq X_1\times X_2,
$$

かつ接層の分裂は $p_{X_1}^*T_{X_1}\oplus p_{X_2}^*T_{X_2}$ に持ち上がる。特に $X$ がFano多様体なら $X\simeq X_1\times X_2$ である（Corollary 1.3）。

## 証明の見取り図

各 $\det V_i^*$ に関するMMPを走らせ、適切なMoriファイバー空間を構成する。底にも接層の分裂を降ろし、次元に関する帰納法を適用するのが骨格である。特異多様体では双対行列式が擬有効になりうる問題があるが、Fano型多様体の接層の商に対する正値性とMori dream space性がこの障害を排除する。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.15427](https://arxiv.org/abs/2602.15427)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollaries 1.2–1.3
- **論文構成の説明:** Section 1.B, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
