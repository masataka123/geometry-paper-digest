---
layout: paper
title: "Klt degenerations of projective spaces"
title_ja: "射影空間のklt退化"
authors: "Andreas Höring, Thomas Peternell"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG]
arxiv_abstract: >-
  We study degenerations of complex projective spaces $\mathbb P^n$ into normal projective klt varieties $X$. If the tangent sheaf of $X$ is semi-stable, we show that $X$ itself is a projective space. If $X$ is a threefold with canonical singularities, we show that there are only three varieties which satisfy all the conditions.
topic: algebraic-geometry
tags: [singularities, moduli, stability, fano-varieties]
arxiv_id: "2403.05250v2"
arxiv_url: "https://arxiv.org/abs/2403.05250"
arxiv_submitted: "2024-03-08"
arxiv_updated: "2024-07-18"
summary: >-
  射影空間$\mathbb P^n$の中心ファイバーが正規klt多様体となる特異退化を研究する。接層が半安定なら中心ファイバーも$\mathbb P^n$であることを示し、標準特異点をもつ3次元の場合には可能性を三種類に分類する。
abstract_en: ""
summary_en: >-
  The paper investigates singular central fibers in projective degenerations whose general fiber is projective space. Semistability of the tangent sheaf forces a normal klt central fiber to remain projective space. In dimension three, assuming canonical singularities, the possible central fibers are classified into three cases. The argument studies the limiting hyperplane class and the rational map it defines, using an induced foliation in the non-generically-finite case.
abstract_ja: >-
  複素射影空間$\mathbb P^n$が正規射影klt多様体$X$へ退化する族を研究する。$X$の接層が半安定なら$X$自身が射影空間であることを証明する。さらに$X$が標準特異点をもつ3次元多様体なら、条件を満たす多様体は三種類に限られる。
abstract_source_url: "https://arxiv.org/abs/2403.05250"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2403.05250v2](https://arxiv.org/abs/2403.05250)
- **著者:** Andreas Höring, Thomas Peternell
- **初回投稿日:** 2024年3月8日
- **最終更新日:** 2024年7月18日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな族で一般ファイバーが$\mathbb P^n$なら中心ファイバーも$\mathbb P^n$であるという変形剛性は古典的である。本論文は中心ファイバーにklt特異点を許すとき、どの程度の剛性が残るかを問う。

中心ファイバー$X$の接層$T_X$が半安定なら$X\simeq\mathbb P^n$である。特異退化自体は多数存在するが、半安定性がそれらを排除するという特徴付けである。

3次元かつ標準特異点の場合には半安定性を仮定せず分類を行い、$\mathbb P^3$、二次曲面上の射影束の特定のsectionを収縮した多様体、論文中のExample 7.16の多様体、という三種類を得る。terminal特異点まで強めれば$\mathbb P^3$のみが残る。

## 背景と問題設定

退化で得られる超平面類は中心ファイバー上で必ずしもCartierではなく、ampleなWeil $\mathbb Q$-Cartier因子$H$となる。Introductionでは

$$
-K_X\simeq(n+1)H,\qquad h^0(X,\mathcal O_X(H))\geq n+1
$$

が基本式である。$X\not\simeq\mathbb P^n$なら$|H|$には基点があり、その有理写像のファイバーが葉層を生む。

## 主結果

### 半安定接層による剛性（Theorem 1.2）

正規射影kltな$\mathbb P^n$の退化$X$について、$T_X$が半安定なら

$$
X\simeq\mathbb P^n
$$

である。$X$のPicard数は1なので、ここでの半安定性は偏極の選択に依存しない。

### 3次元標準退化の分類（Theorem 1.3）

正規射影で標準特異点をもつ$\mathbb P^3$の退化$X$は、次のいずれかである。

1. $X\simeq\mathbb P^3$。
2. 二次曲面$S$上の$\mathbb P(\mathcal O_S\oplus\mathcal O_S(-K_S))$でsection $\mathbb P(\mathcal O_S)$を収縮したもの。
3. Example 7.16の多様体。

第三の場合には$-K_X\simeq4H$かつ

$$
H\simeq3F+B
$$

であり、$B$は$|H|$の固定部分、$F$は$D_5$特異点をもつ次数4のdel Pezzo曲面のpencilである。

### terminalの場合（Corollary 1.4）

正規射影terminalな$\mathbb P^3$の退化は$\mathbb P^3$に限る。

## 証明の見取り図

$|H|$の定める有理写像が生成有限なら射影空間を回復する。そうでなければ一般ファイバーが葉層$\mathcal F\subset T_X$を定め、これが接層を不安定化するためTheorem 1.2が従う。3次元分類では$\mathbb Q$-factorial化上で$|H|$の可動部分を調べ、次数4のdel Pezzoファイバーへ帰着する。さらに$|2H|$のグラフが$\mathbb P^9$内の最小次数曲面上のconic bundleとなることを用いて三つの候補を特定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2403.05250](https://arxiv.org/abs/2403.05250)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3; Corollary 1.4
- **論文構成の説明:** Section 1.B, pp. 2–3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
